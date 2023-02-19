let request = require('request');
let options = {
  'method': 'GET',
  'url': 'https://api.adviceslip.com/advice',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
async function fetchAdvice() {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const json = await response.json();
      return json.slip.advice;
    } catch (error) {
      console.error(error);
    }
  }

  import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export default function Advice() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    async function getAdvice() {
      const advice = await fetchAdvice();
      setAdvice(advice);
    }
    getAdvice();
  }, []);

  return (
    <View>
      <Text>{advice}</Text>
    </View>
  );
}