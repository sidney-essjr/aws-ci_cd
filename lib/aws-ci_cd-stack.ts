import * as cdk from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class AwsCiCdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, 'AwesomePipeline', {
      pipelineName: "AwesomePipeline",
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('sidney-essjr/aws-ci_cd', 'main'),
        commands: [
          'npm ci',
          'npx cdk synth'
        ]
      })
    })

  }
}
