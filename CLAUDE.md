# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start dev server (choose platform)
npx expo start
npx expo start --ios
npx expo start --android
npx expo start --web

# Lint
npx expo lint

# Run tests
npx jest --watchAll

# Run a single test file
npx jest components/__tests__/ThemedText-test.tsx
```

## Architecture

This is an **Expo Router** app (file-based routing) for discovering allergy/diet-friendly restaurants in Taiwan.

### Routing structure

- `app/(tabs)/` — tab navigator with three screens: `Search`, `index` (Home), `Map`
- `app/food/[id].tsx` — detail page for a single food/restaurant entry, accessed via `router.push('/food/<uid>')`

### Data layer

All restaurant data lives in **`constants/Food.ts`** as a hardcoded `foodList` array. The `Food` interface has: `uid`, `food_name`, `restaurant_name`, `restaurant_latitude/longitude`, `restaurant_address`, `image_link`. There is no backend or API — adding or editing restaurants means editing this file and adding images to `assets/images/foods/`.

### Platform-specific map components

Map components have `.tsx` (native) and `.web.tsx` (web stub) variants — Expo's platform resolution picks the right one automatically:

- `ClusterLocationMapView` — uses `react-native-maps` + `expo-location` on native; renders nothing on web
- `SingleLocationMapView` — same pattern; shown in the food detail page

The web map stubs are currently empty. If web map support is needed, the `.web.tsx` files are where to implement it (e.g., using `react-leaflet`, which is already installed).

### Search

`FoodSearchResultView` filters `foodList` by `food_name` (case-insensitive substring match). Tapping a result navigates to `/food/<uid>`.
