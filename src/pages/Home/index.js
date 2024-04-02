import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { IcWater } from '../../assets'
import { CardMenu, HomeHeader } from '../../components'
import { checkPermission, colors, mergeData, showToast } from '../../utils'

const Home = ({navigation}) => {
  const [user, setUser] = useState({
    name_system: "Tik, Riway Restu Islami Yudha",
    name: "Riway Restu Islami Yudha",
    duty_plant: [],
  });
  const [sysPlantId, setSysPlantId] = useState(0);

  useEffect(() => {
    // getData('user').then(res => {
    //   setUser(res);
    //   setSysPlantId(res.sys_plant_id)
    // });
  }, []);

  const onSelectChange = (value) => {
    setSysPlantId(value);
    mergeData('user', {"sys_plant_id": value});
    setUser({...user, "sys_plant_id": value})
	}

  const permission = (menu, access, page) => {
    checkPermission(menu, access, user) ? navigation.navigate(page) : showToast('Tidak ada akses');
  }
  
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <HomeHeader title={user.name_system} name={user.name} picker={user.duty_plant} onSelectChange={(value) => onSelectChange(value)} value={sysPlantId} onPress={() => navigation.navigate('Profile')} />
        <View style={styles.container}>
          <CardMenu color='#2C61B9' title='Pencatatan Air' icon={<IcWater width={40} height={40} />} onPress={() => permission('hrd_out_of_office', 'view', 'DinasKeluar')} />
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.secondary_white},
  container: {
    padding: 24,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
})