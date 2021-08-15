#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CooperCdkStack } from './stacks/cooper-cdk-stack';

const app = new cdk.App();

new CooperCdkStack(app, 'CooperCdkStack');
