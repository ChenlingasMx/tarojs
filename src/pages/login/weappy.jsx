import React from 'react';
import { View, Text } from '@tarojs/components';
import { Button } from '@nutui/nutui-react-taro';
import './index.scss';

const WeAppy = () => {
  return (
    <View className="btn-container">
      <Button type="primary" block>
        手机号授权
      </Button>
      <Button type="primary" block style={{ marginTop: 20 }}>
        用户信息授权
      </Button>
      <View className="onload-footer">
        <View>
          登录即代表您同意
          <Text style={{ color: '#fd8a00' }}>《uiw服务条款》</Text>和
        </View>
        <View>
          <Text style={{ color: '#fd8a00' }}>《uiw流隐私政策》</Text>
        </View>
      </View>
    </View>
  );
};
export default WeAppy;
