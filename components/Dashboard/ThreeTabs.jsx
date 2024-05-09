import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import img1 from '../../assets/images/redarrow.png'
import img2 from '../../assets/images/greenarrow.png'
import threedots from '../../assets/images/threedots.png'
import bluegraph from '../../assets/images/bluegraph.png'
import redgraph from '../../assets/images/redgraph.png'
import pie from '../../assets/images/pie.png'

export default function ThreeTabs() {
  return (
    <SafeAreaView>
  {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
    <View className='t-4  gap-y-10'>
      <View className='p-4  relative w-[80vw] mx-auto  h-auto bg-[#F9F9F9]  pb-6'>
              <Text className='text-black text-xl font-bold '>Offline Consultations</Text>
              <Image className='absolute right-3 top-5' source={threedots}></Image>
              <Text className='text-3xl font-bold mt-6'>101</Text>
              <View className='flex-row mt-6'>
              <Image className=' w-6 h-6 mt-1' source={img2}  />            
                <Text className=' text-xl text-[#27AE60] ml-2 '>+ 3.11%</Text>
              </View>
                <Image source={bluegraph} className='w-[50%] absolute right-0 top-[50%]'></Image>
      </View>
      <View className='p-4  relative w-[80vw] mx-auto h-auto bg-[#F9F9F9]  pb-6'>
              <Text className='text-black text-xl font-bold '>Online Consultations</Text>
              <Image className='absolute right-3 top-5' source={threedots}></Image>
              <Text className='text-3xl font-bold mt-6'>96</Text>
              <View className='flex-row mt-6'>
              <Image className=' w-6 h-6 mt-1' source={img1}  />            
                <Text className=' text-xl text-[#EB5757] ml-2 '>- 20.9%</Text>
              </View>
                <Image source={redgraph} className='w-[50%] absolute right-0 top-[50%]'></Image>
      </View>
      <View className='p-4  relative w-[80vw] mx-auto h-auto bg-[#F9F9F9] pb-20'>
              <Text className='text-black text-xl font-bold '>Total Patients</Text>
              <Image className='absolute right-3 top-5' source={threedots}></Image>
              <Text className='text-3xl font-bold mt-6'>197</Text>
                <Image source={pie} className='w-[115px] absolute right-6 h-[115px] top-[40%]'></Image>
                <View className='absolute right-7 top-[80%] text-center'>
                <Text className='mr-4'>110 <Text className='text-[#2F80ED]'>female</Text></Text>
                <Text className='ml-2'>87 <Text className='text-[#EB5757]'>male</Text></Text>
                </View>
      </View>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})