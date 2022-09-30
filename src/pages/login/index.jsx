import React from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '@nutui/nutui-react-taro';
import { useSelector } from 'react-redux'
import './index.scss'

const Login = () => {
  const { name } = useSelector(state => state.global)
  return (
    <View className="login">
      <Text>{name}</Text>
      <Button type="primary" className="btn">登陆</Button>
    </View>
  )
}

export default Login