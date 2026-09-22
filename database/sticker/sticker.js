

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { writeFileSync, unlinkSync } = require('fs');
const { tmpdir } = require('os');
const { randomUUID } = require('crypto');

async function ffmpegSticker(buffer, { packname = '', author = '', fps = 15, loop = 0, quality = 70 } = {}) {
  const id = randomUUID();
  const inputPath = path.join(tmpdir(), `${id}.${buffer[0] === 0x00 ? 'mp4' : 'jpg'}`);
  const outputPath = path.join(tmpdir(), `${id}.webp`);

  writeFileSync(inputPath, buffer);

  return new Promise((resolve, reject) => {
    const command = `ffmpeg -i "${inputPath}" -vf "scale=512:512:force_original_aspect_ratio=decrease,fps=${fps},pad=512:512:(ow-iw)/2:(oh-ih)/2:color=0x00000000" -loop ${loop} -preset default -an -vsync 0 -s 512:512 -qscale ${quality} "${outputPath}"`;

    exec(command, (err) => {
      if (err) return reject(err);
      const result = fs.readFileSync(outputPath);
      unlinkSync(inputPath);
      unlinkSync(outputPath);
      resolve(result);
    });
  });
}

module.exports = {
  // outras funções...
  ffmpegSticker
};