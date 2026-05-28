import { Text, View } from 'react-native';

import { Icon } from '@/components/ui/icon';
import { SunIcon } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <View className="w-full flex-1 bg-white px-4 py-6" testID="weather-screen">
      <View className="flex w-full flex-row items-center justify-between">
        <Text className="text-lg">27/05</Text>
        <Text className="text-lg font-bold">28/05</Text>
        <Text className="text-lg">29/05</Text>
      </View>
      <Text testID="city-name">Villa Lugano</Text>

      <Icon as={SunIcon}></Icon>
      <View>
        <Text testID="humidity"> Humedad: 98%</Text>
        <Text testID="wind"> Viento: 12 m/s</Text>
        <Text testID="pressure"> Presión: 1000 hPa</Text>
      </View>
      <View className="flex w-full flex-row items-center justify-between">
        <Text className="text-lg">27º</Text>
        <Text className="text-lg font-bold">15º</Text>
        <Text className="text-lg">20º</Text>
      </View>
    </View>
  );
}
