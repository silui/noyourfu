import React from "react";

import ClusterLocationMapView from '@/components/ClusterLocationMapView';
import {foodList} from '@/constants/Food';

export default function Map() {
  return (
      <ClusterLocationMapView foodList={foodList}/>
  );
}
