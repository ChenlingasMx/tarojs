import React, { useState } from 'react';
import { View } from '@tarojs/components';
import { Button, Input } from '@nutui/nutui-react-taro';

import './index.scss';

const Index = () => {
  const [state] = useState({
    text: '',
    password: '',
    number: '',
    digit: '',
    tel: '',
  });
  return (
    <View className="index">
      <Input label="文本" placeholder="文本" defaultValue={state.text} />
      <Button type="primary" className="btn">
        主要按钮111111111111
      </Button>
    </View>
  );
};
export default Index;
