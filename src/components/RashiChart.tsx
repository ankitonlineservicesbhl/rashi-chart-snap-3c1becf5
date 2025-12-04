import React, { useRef, useEffect } from 'react';

interface RashiChartProps {
  rashis: number[];
  houses: string[][];
  title?: string;
}

const RashiChart: React.FC<RashiChartProps> = ({ rashis, houses, title = "Rashi Chart" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scale = 2; // ⭐ Change chart size here (1 = normal, 2 = 2x, 3 = 3x)

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset and clear
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ⭐ Apply scale BEFORE drawing
    ctx.scale(scale, scale);

    const x = 0;
    const y = 0;
    const width = 250;
    const height = 200;

    // Draw chart structure (North Indian style)
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = '#FFFFFF';

    // Fill background
    ctx.fillRect(x, y, width, height);

    // Outer square
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x, y + height);
    ctx.closePath();
    ctx.stroke();

    // Inner diamond
    ctx.beginPath();
    ctx.moveTo(x, y + height / 2);
    ctx.lineTo(x + width / 2, y);
    ctx.lineTo(x + width, y + height / 2);
    ctx.lineTo(x + width / 2, y + height);
    ctx.closePath();
    ctx.stroke();

    // Diagonal lines
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + height);
    ctx.lineTo(x + width, y);
    ctx.stroke();

    // Draw zodiac numbers
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#000000';

    const zodiacPos = [
      [125, 93], [62, 43], [50, 54], [111, 104],
      [50, 154], [62, 165], [125, 117], [188, 165],
      [200, 154], [139, 104], [200, 54], [188, 43]
    ];

    rashis.forEach((rashi, i) => {
      ctx.fillText(String(rashi), zodiacPos[i][0], zodiacPos[i][1]);
    });

    // Draw planets in houses
    ctx.font = '8px Arial';
    ctx.fillStyle = 'rgba(0, 0, 255, 0.8)';

    const housePos = [
      [125, 53], [62, 13], [26, 54], [62, 104],
      [26, 154], [62, 195], [125, 154], [188, 195],
      [224, 154], [189, 104], [224, 54], [188, 13]
    ];

    houses.forEach((planets, i) => {
      if (planets.length > 0) {
        ctx.fillText(planets.join(' '), housePos[i][0], housePos[i][1]);
      }
    });

    // Draw title
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    ctx.fillText(title, 2, height + 15);

  }, [rashis, houses, title, scale]);

  return (
    <canvas
      ref={canvasRef}
      width={250 * scale}
      height={220 * scale}
      className="border border-border"
	  style={{ maxWidth: "90%", height: "auto" }}   // 👈 ADD THIS
    />
  );
};

export default RashiChart;
