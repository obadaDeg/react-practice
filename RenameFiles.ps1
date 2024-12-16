# Define the target directories
$directories = @(".\src\components", ".\src\pages")

# Loop through each directory
foreach ($dir in $directories) {
    # Check if the directory exists
    if (Test-Path $dir) {
        # Get all .ts files in the directory and subdirectories
        $files = Get-ChildItem -Path $dir -Recurse -Filter "*.js"

        foreach ($file in $files) {
            # Construct the new file name with the .tsx extension
            $newFileName = [System.IO.Path]::ChangeExtension($file.FullName, ".jsx")

            # Rename the file
            Rename-Item -Path $file.FullName -NewName $newFileName

            # Output the change for confirmation
            Write-Host "Renamed: $($file.FullName) -> $newFileName"
        }
    } else {
        Write-Host "Directory does not exist: $dir"
    }
}
