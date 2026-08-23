# Download selected Wikimedia Commons images into public\images
# Run this from the repository root (C:\Users\smile\sengerema-demo) in PowerShell:
#   PowerShell -ExecutionPolicy Bypass -File .\public\images\download_wikimedia_images.ps1

$ErrorActionPreference = 'Stop'
$urls = @{
  "hero-electrical-infrastructure.jpg" = "https://upload.wikimedia.org/wikipedia/commons/8/83/Umeme.jpg"
  "engineers-site.jpg" = "https://upload.wikimedia.org/wikipedia/commons/1/18/Electrical_engineer.jpg"
  "power-distribution.jpg" = "https://upload.wikimedia.org/wikipedia/commons/4/42/Center_street_%2C_Liberia_Africa_-_panoramio.jpg"
  "transformer.jpg" = "https://upload.wikimedia.org/wikipedia/commons/9/92/Electricien_douala.jpg"
  "rural-electrification.jpg" = "https://upload.wikimedia.org/wikipedia/commons/5/55/Aerial_Photo_of_Moshi%2C_Tanzania.jpg"
  "electrical-installation.jpg" = "https://upload.wikimedia.org/wikipedia/commons/f/f3/Electrical_workers_at_work.jpg"
  "civil-electrical.jpg" = "https://upload.wikimedia.org/wikipedia/commons/2/26/People_working_at_the_construction_site%2C_Addis_Abeba%2C_Ethiopia_02.jpg"
  "powering-tanzania.jpg" = "https://upload.wikimedia.org/wikipedia/commons/2/25/Tanzania_from_above.jpg"
}

$folder = Join-Path (Get-Location) "public\images"
if (-not (Test-Path $folder)) { New-Item -ItemType Directory -Path $folder | Out-Null }

$headers = @{ 'User-Agent' = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }

foreach ($name in $urls.Keys) {
  $url = $urls[$name]
  $out = Join-Path $folder $name
  try {
    Write-Host "Downloading $name from $url ..."
    Invoke-WebRequest -Uri $url -OutFile $out -Headers $headers -TimeoutSec 120
    Write-Host "Saved -> $out"
  }
  catch {
    Write-Host ("ERROR downloading {0}: {1}" -f $name, $_.Exception.Message) -ForegroundColor Red
  }
  Start-Sleep -Seconds 2
}

Write-Host "All done. Verify the files in $folder" -ForegroundColor Green
