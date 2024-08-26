#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsCiCdStack } from "../lib/aws-ci_cd-stack";

const app = new cdk.App();
new AwsCiCdStack(app, "AwsCiCdStack", {});

app.synth();
