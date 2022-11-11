echo "Installing FFmpeg and Imagemagick, Please Type (y) and enter" 
sudo apt install imagemagick ffmpeg 
echo "Installing pm2"
npm i -g pm2 
echo "Starting pm2" 
pm2 start index.js 
pm2 save
pm2 logs
