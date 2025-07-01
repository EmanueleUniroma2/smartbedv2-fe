import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./style.scss";

const GRID_WIDTH = 15;
const GRID_HEIGHT = 8;

const THRESHOLDS = {
  green: 23,
  yellow: 26,
};

const getColor = (value: number): string => {
  if (value <= THRESHOLDS.green) return "rgba(0, 128, 0, 0.7)"; // green
  if (value <= THRESHOLDS.yellow) return "rgba(255, 215, 0, 0.7)"; // gold
  return "rgba(255, 99, 71, 0.7)"; // tomato
};

const generateRandomSensors = (): { sensors: any[]; timestamp: string } => {
  const sensors = [];

  for (let y = 0; y < GRID_HEIGHT; y++) {
    for (let x = 0; x < GRID_WIDTH; x++) {
      const random = Math.random();

      // Only a small percentage will have non-zero values
      const value = random < 0.85 ? 0 : Math.floor(20 + Math.random() * 10); // range 20–30

      sensors.push({
        sensorId: `sensor-${x}-${y}`,
        value,
        meta: { X: x, Y: y },
      });
    }
  }

  return {
    sensors,
    timestamp: new Date().toISOString(),
  };
};

const ReadingPage: React.FC = () => {
  const [sensorData, setSensorData] = useState(generateRandomSensors());

  useEffect(() => {
    const interval = setInterval(() => {
      setSensorData(generateRandomSensors());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box padding={4}>
      <Typography variant="h5" gutterBottom>
        Smart Bed Sensor Readings
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Timestamp: {new Date(sensorData.timestamp).toLocaleString()}
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns={`repeat(${GRID_WIDTH}, 40px)`}
        gap={1}
        marginTop={3}
      >
        {sensorData.sensors.map((sensor) => (
          <Box
            key={sensor.sensorId}
            width={40}
            height={40}
            bgcolor={getColor(sensor.value)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={0.5}
          >
            <Typography variant="caption">{sensor.value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReadingPage;
