import React from "react";
import ClusterLocationMapView from '@/components/ClusterLocationMapView';
import { restaurants } from '@/constants/Food';

export default function Map() {
  return <ClusterLocationMapView restaurants={restaurants} />;
}
