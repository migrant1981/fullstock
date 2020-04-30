pipeline {
   agent any
   stages {
		stage('Fetch angular code') {
            steps {
                sh 'ls -ltr ~/'
                checkout(
                    [
                        $class: 'GitSCM',
                        branches: [[ name: "*/master" ]],
                        doGenerateSubmoduleConfigurations: false,
                        extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: "html"]],
                        submoduleCfg: [],
                        userRemoteConfigs: [
                            [
                                credentialsId: "fsd-stock",
                                name: 'master',
                                refspec: "+refs/heads/master:+refs/remotes/origin/master",
                                url: "git@github.com:migrant1981/fullstock.git"	
                            ]
                        ]
                    ]
                )
                sh 'pwd'
            }
        }
		
        stage('build angular image & run') {
            steps {
                dir('/var/jenkins_home/workspace/test/html/fullstock-master/src/main/resources/static/ng-bootstrap') {
                    sh 'ls -ltr'
                    sh 'pwd'
					sh 'docker build . -t angularportal'
                    sh 'docker run --rm  -p 4200:4200 angularportal'
                }
            }
        }
    }
}