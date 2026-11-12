
import React from 'react';

import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  type TabTriggerSlotProps,
  type TabListProps,
} from 'expo-router/ui';

import { SymbolView } from 'expo-symbols';

import {
  Pressable,
  useColorScheme,
  View,
  StyleSheet,
  type PressableProps,
} from 'react-native';

import {
  Colors,
  MaxContentWidth,
  Spacing,
} from '@/constants/theme';

import { ExternalLink } from './external-link';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

// Main Tabs Component
export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />

      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>

          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

// Custom Tab Button
export function TabButton({
  children,
  isFocused,
  ...props
}: TabTriggerSlotProps) {
  // Remove props that may conflict with Pressable types
  const {
    ref: _routerRef,
    style: _routerStyle,
    ...restProps
  } = props;

  const pressableProps = restProps as PressableProps;

  return (
    <Pressable
      {...pressableProps}
      style={({ pressed }) => [
        styles.tabButtonPressable,
        pressed && styles.pressed,
      ]}
    >
      <ThemedView
        type={
          isFocused
            ? 'backgroundSelected'
            : 'backgroundElement'
        }
        style={styles.tabButtonView}
      >
        <ThemedText
          type="small"
          themeColor={
            isFocused ? 'text' : 'textSecondary'
          }
        >
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  );
}

// Custom Tab List
export function CustomTabList(props: TabListProps) {
  const scheme = useColorScheme();

  const colors =
    Colors[scheme === 'dark' ? 'dark' : 'light'];

  // TabListProps does not define a ref property
  const {
    style: _listStyle,
    asChild: _asChild,
    ...restProps
  } = props;

  return (
    <View
      {...restProps}
      style={styles.tabListContainer}
    >
      <ThemedView
        type="backgroundElement"
        style={styles.innerContainer}
      >
        <ThemedText
          type="smallBold"
          style={styles.brandText}
        >
          Expo Starter
        </ThemedText>

        {props.children}

        <ExternalLink
          href="https://docs.expo.dev"
          asChild
        >
          <Pressable style={styles.externalPressable}>
            <ThemedText type="link">
              Docs
            </ThemedText>

            <SymbolView
              tintColor={colors.text}
              name={{
                ios: 'arrow.up.right.square',
                web: 'link',
              }}
              size={12}
            />
          </Pressable>
        </ExternalLink>
      </ThemedView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  innerContainer: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.five,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: Spacing.two,
    maxWidth: MaxContentWidth,
  },

  brandText: {
    marginRight: 'auto',
  },

  tabButtonPressable: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  pressed: {
    opacity: 0.7,
  },

  tabButtonView: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
  },

  externalPressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: Spacing.one,
    marginLeft: Spacing.three,
  },
});
