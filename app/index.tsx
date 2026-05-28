import { useState } from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { weatherData } from '@/data/weather';

// Icono del clima
const WeatherIcon = ({ condition }: { condition: string }) => {
  const iconSize = Dimensions.get('window').height * 0.16;

  switch (condition) {
    case '☀️':
      return <Ionicons name="sunny-outline" size={iconSize} color="black" />;
    case '🌧️':
      return <MaterialCommunityIcons name="weather-pouring" size={iconSize} color="black" />;
    case '⛅':
      return <MaterialCommunityIcons name="weather-cloudy" size={iconSize} color="black" />;
    default:
      return <Ionicons name="sunny-outline" size={iconSize} color="black" />;
  }
};

export default function HomeScreen() {
  const [diaActual, setDiaActual] = useState(0);

  const clima = weatherData[diaActual];

  const siguienteDia = () => {
    if (diaActual < weatherData.length - 1) {
      setDiaActual(diaActual + 1);
    }
  };

  const diaAnterior = () => {
    if (diaActual > 0) {
      setDiaActual(diaActual - 1);
    }
  };

  return (
    <View testID="weather-screen" className="flex-1 bg-[#dbeafe] items-center justify-between pt-16 pb-10">

      <StatusBar style="auto" />

      {/* CIUDAD */}
      <View className="items-center">
        <Text testID="city-name" className="text-3xl font-bold tracking-widest">
          {clima.city.toUpperCase()}
        </Text>

        <Text className="text-gray-500 mt-1">
          {clima.day}
        </Text>
      </View>

      {/* CLIMA PRINCIPAL */}
      <View className="items-center">
        <WeatherIcon condition={clima.condition} />

        <Text className="text-7xl font-light">
          {clima.temperature}°
        </Text>

        <Text className="text-gray-600">
          Min: {clima.min}° / Max: {clima.max}°
        </Text>
      </View>

      {/* MÉTRICAS */}
      <View className="flex-row justify-around w-full px-6">
        <View testID="humidity">
          <Text>💧 {clima.humidity}%</Text>
        </View>

        <View testID="wind">
          <Text>🌬️ {clima.wind} m/s</Text>
        </View>

        <View testID="pressure">
          <Text>🌡️ {clima.pressure} hPa</Text>
        </View>
      </View>

      {/* BOTONES */}
      <View className="flex-row gap-6">

        <TouchableOpacity
          testID="previous-button"
          onPress={diaAnterior}
          disabled={diaActual === 0}
          className="bg-sky-200 px-6 py-3 rounded-full"
        >
          <AntDesign name="left" size={16} />
          <Text>Anterior</Text>
        </TouchableOpacity>

        <TouchableOpacity
          testID="next-button"
          onPress={siguienteDia}
          disabled={diaActual === weatherData.length - 1}
          className="bg-sky-200 px-6 py-3 rounded-full"
        >
          <Text>Siguiente</Text>
          <AntDesign name="right" size={16} />
        </TouchableOpacity>

      </View>
    </View>
  );
}