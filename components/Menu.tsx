import { Divider, HamburgerIcon, Menu, Pressable } from 'native-base';
import React from 'react';


function MenuBar() {
  return <Menu trigger={triggerProps => {
    return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
      <HamburgerIcon color="white" marginRight={2} />
    </Pressable>;
  }}>
    <Menu.Item>Profile</Menu.Item>
    <Menu.Item>Your likes</Menu.Item>
    <Divider />
    <Menu.Item>Log Out</Menu.Item>
  </Menu>;
}

export default MenuBar;