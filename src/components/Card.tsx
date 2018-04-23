import * as React from 'react';
import ElevatedView from 'react-native-elevated-view';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getTheme } from '../modules/theme';

import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewProperties
} from 'react-native';

export interface CardHeaderProperties {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  onHelpPress?: () => void;
}

export class CardHeader extends React.Component<CardHeaderProperties> {
  render() {
    const { title, titleStyle, onHelpPress } = this.props;

    return (
      <View style={cardHeaderStyles.container}>
        <Text style={[cardHeaderStyles.title, titleStyle]}>{title}</Text>
        <TouchableOpacity onPress={onHelpPress} style={cardHeaderStyles.help}>
          <FontAwesome
            name="question-circle"
            style={cardHeaderStyles.helpIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export class CardSection extends React.Component<ViewProperties> {
  render() {
    const { children, style, ...otherProps } = this.props;

    return (
      <View style={[cardSectionStyles.container, style]} {...otherProps}>
        {children}
      </View>
    );
  }
}

export interface CardProperties {
  children: React.ReactNode;
}

export class Card extends React.Component<CardProperties> {
  static Header = CardHeader;
  static Section = CardSection;

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      if (index === 0) {
        return child;
      }

      return (
        <>
          <View
            style={{ borderTopColor: theme.borderColor1, borderTopWidth: 1 }}
          />
          {child}
        </>
      );
    });

    return (
      <ElevatedView elevation={5} style={cardStyles.container}>
        {children}
      </ElevatedView>
    );
  }
}

const theme = getTheme();

const cardStyles = StyleSheet.create({
  container: {
    borderRadius: 3,
    backgroundColor: theme.backgroundColor1
  }
});

const cardHeaderStyles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    color: theme.textColor1,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
    marginRight: 10
  },
  help: {
    position: 'absolute',
    right: 5,
    top: 5
  },
  helpIcon: {
    fontSize: 20,
    color: '#6d819c'
  }
});

const cardSectionStyles = StyleSheet.create({
  container: {
    padding: 16
  }
});