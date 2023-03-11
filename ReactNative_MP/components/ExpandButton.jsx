import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

const ExpandButton = ({ expanded, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={expanded ? 'chevron-up' : 'chevron-down'} size={33} color="#bbb" />
    </TouchableOpacity>
  );
};

const Icon = styled(Ionicons)`
  margin-right: 10px;
  z-index: 100;

`;

export default ExpandButton;
