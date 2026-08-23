# Optimize images with ImageMagick
# Requirements: ImageMagick (magick) installed and available in PATH.
# Run from repository root: PowerShell -ExecutionPolicy Bypass -File .\public\images\optimize_images.ps1

Param(
  [string[]] $Sources = @(
    "public/images/hero-electrical-infrastructure.jpg",
    "public/images/engineers-site.jpg",
    "public/images/power-distribution.jpg",
    "public/images/transformer.jpg",
    "public/images/powering-tanzania.jpg",
    "public/images/rural-electrification.webp",
    "public/images/civil-electrical.webp",
    "public/images/Tanzania Rural Electrification.jpg"
  ),
  [int[]] $Widths = @(320, 640, 960, 1280, 1600, 2400),
  [string] $OutDir = "public/images/optimized",
  [int] $JpegQuality = 75,
  [int] $WebpQuality = 75,
  [int] $AvifQuality = 40
)

Write-Host "Optimizing images..." -ForegroundColor Green
if (-not (Get-Command magick -ErrorAction SilentlyContinue)) {
  Write-Host "ImageMagick 'magick' not found in PATH. Install ImageMagick before running this script." -ForegroundColor Red
  exit 1
}

if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir | Out-Null }

$manifest = @{}

foreach ($src in $Sources) {
  if (-not (Test-Path $src)) {
    Write-Host "Source not found: $src" -ForegroundColor Yellow
    continue
  }

  $base = [System.IO.Path]::GetFileNameWithoutExtension($src)
  $base = $base -replace ' ', '-' -replace "[^0-9A-Za-z-_]", ''
  $entry = @{ "sources" = @{} }

  foreach ($w in $Widths) {
    $outJpg = "${OutDir}/${base}-${w}.jpg"
    $outWebp = "${OutDir}/${base}-${w}.webp"
    $outAvif = "${OutDir}/${base}-${w}.avif"

    Write-Host "Generating sizes for ${base} @ ${w}px..."

    # JPEG
    magick convert `
      "$src" `
      -strip -interlace Plane -quality $JpegQuality `
      -resize ${w}x `
      "$outJpg"

    # WebP (lossy)
    magick convert `
      "$src" `
      -strip -quality $WebpQuality `
      -resize ${w}x `
      "$outWebp"

    # AVIF (smaller, modern)
    magick convert `
      "$src" `
      -strip -quality $AvifQuality `
      -resize ${w}x `
      "$outAvif"

    # Add to manifest lists
    if (-not $entry.sources.ContainsKey('avif')) { $entry.sources['avif'] = @() }
    if (-not $entry.sources.ContainsKey('webp')) { $entry.sources['webp'] = @() }
    if (-not $entry.sources.ContainsKey('jpg'))  { $entry.sources['jpg']  = @() }

    $entry.sources['avif'] += "/images/optimized/${base}-${w}.avif ${w}w"
    $entry.sources['webp'] += "/images/optimized/${base}-${w}.webp ${w}w"
    $entry.sources['jpg']  += "/images/optimized/${base}-${w}.jpg ${w}w"
  }

  $manifest[$base] = $entry
}

# Write manifest to src/data for import in React
$manifestPath = "src/data/image-manifest.json"
$manifestJson = $manifest | ConvertTo-Json -Depth 5
Set-Content -Path $manifestPath -Value $manifestJson -Encoding UTF8

Write-Host "Optimization complete. Manifest written to $manifestPath" -ForegroundColor Green
Write-Host "Optimized files are in $OutDir" -ForegroundColor Green
