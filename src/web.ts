import { WebPlugin } from '@capacitor/core';

import type {
  AttributePath,
  MatterPlugin,
  SubscriberOptions,
} from './definitions';

export class MatterWeb extends WebPlugin implements MatterPlugin {
  removeFabric(options: { deviceId: string; fabricId: string }): Promise<void> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  removeAllFabric(options: { deviceId: string }): Promise<void> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  openCommissioningWindow(options: {
    deviceId: string;
    discriminator: number;
    duration: number;
  }): Promise<{ manualCode: string }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  qrCodeCommissioning(options: {
    deviceId: string;
    qrCodeId: string;
    ssid: string;
    ssidPassword: string;
  }): Promise<{ deviceType: string }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  manualCodeCommissioning(options: {
    deviceId: string;
    manualCode: string;
    ssid: string;
    ssidPassword: string;
  }): Promise<{ deviceType: string }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  getCerts(): Promise<{ deviceControllerKey: string; caRootCert: string }> {
    throw new Error('Method not implemented.');
  }
  readAttribute(options: AttributePath): Promise<{ value: string }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  subscribeAttribute(options: SubscriberOptions): Promise<void> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  configure(options: {
    deviceControllerKey?: string;
    caRootCer?: string;
    fabricId: string;
    vendorId: number;
  }): Promise<void> {
    console.log(options);
    throw new Error('Method not implemented.');
  }
  clear(): Promise<void> {
    throw new Error('Method not implemented.');
  }
  commandOnOff(options: {
    value: boolean;
    deviceId: string;
    endpointId: number;
  }): Promise<void> {
    console.log(options);
    throw new Error('Method not implemented.');
  }

  getEndpoint<T>(options: {
    deviceId: string;
    endpointId: number;
  }): Promise<{ data: T }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }
  getCluster<T>(options: {
    deviceId: string;
    endpointId: number;
    clusterId: number;
  }): Promise<{ data: T }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }
  getAttribute<T>(options: {
    deviceId: string;
    endpointId: number;
    clusterId: number;
    attributeId: number;
  }): Promise<{ data: T }> {
    console.log(options);
    throw new Error('Method not implemented.');
  }
}
