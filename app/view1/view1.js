angular.module('myApp',['ui.bootstrap','dialogs.main','pascalprecht.translate'])
    .controller('dialogServiceTest',function($scope,$rootScope,$timeout,$translate,dialogs){

      //-- Variables --//

      $scope.name = '';
      $scope.confirmed = 'No confirmation yet!';

      $scope.custom = {
        val: 'Initial Value'
      };

      //-- Methods --//

      $scope.error = function () {
        dialogs.error('Opa, pera aí', 'Ohh xente, stupid!!');
      };

      $scope.confirm = function () {
        dialogs.confirm('Opa, pera aí', 'Ohh xente, stupid!!');
      };

      $scope.launch = function(which){
        switch(which){
          case 'error':
            dialogs.error('Erro Crazy dude!!', 'Ohh man, stupid!!');
            break;
          case 'notify':
            dialogs.notify();
            break;
          case 'confirm':
            var dlg = dialogs.confirm();
            dlg.result.then(function(btn){
              $scope.confirmed = 'You confirmed "Yes."';
            },function(btn){
              $scope.confirmed = 'You confirmed "No."';
            });
            break;
        }
      }; // end launch
    }) // end controller(dialogsServiceTest)

    .config(function(dialogsProvider,$translateProvider){
      dialogsProvider.useBackdrop('static');
      dialogsProvider.useEscClose(false);
      dialogsProvider.useCopy(false);
      dialogsProvider.setSize('sm');
    })

    .run(['$templateCache',function($templateCache){
      // $templateCache.put('/dialogs/error.html','/app/tpl/error.html');
    }])
;
