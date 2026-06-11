import * as React from 'react';
import { View } from 'react-native';
import { PaperProvider, Menu, IconButton } from 'react-native-paper';

export default function App() {

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <PaperProvider>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >

        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <IconButton
              icon="dots-vertical"
              size={30}
              onPress={openMenu}
            />
          }
        >

          <Menu.Item
            onPress={() => {
              console.log("Edit");
              closeMenu();
            }}
            title="Edit"
          />

          <Menu.Item
            onPress={() => {
              console.log("Delete");
              closeMenu();
            }}
            title="Delete"
          />

        </Menu>

      </View>

    </PaperProvider>
  );
}