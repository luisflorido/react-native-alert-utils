import React from 'react';
import {
  Text, View, Button,
} from 'react-native';
import ModalProvider, { setModal, popModal } from 'react-native-alert-utils';
import { SimpleLayout } from 'react-native-alert-utils/Layout';

export default function App() {
  function modal() {
    return (
      <View style={{
        flex: 1,
      }}
      >
        <Text>teste</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1, zIndex: 0, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Text>teste</Text>
        <Button title="Abrir" onPress={() => setModal(<SimpleLayout>{modal()}</SimpleLayout>)}>Abrir modal</Button>
        <Button title="FECHAR" onPress={() => popModal()}>Esconder modal</Button>
      </View>
      <ModalProvider />
    </View>
  );
}
