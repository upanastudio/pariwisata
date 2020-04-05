(function (){
   var app = angular.module('myApp', []);
   app.controller('MyController', ['$scope', myController]);

   var excelJsonObj = [];
   
   function myController($scope){
     
      $scope.uploadExcel = function(){
         var myFile = document.getElementById('file');
         var input = myFile;
         var reader = new FileReader();
         reader.onload = function(){
            var fileData = reader.result;
            var workbook = XLSX.read(fileData, {type: 'binary'});
            workbook.SheetNames.forEach(function(sheetName){
               var rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
               excelJsonObj = rowObject;
            });

            for(var i = 0; i< excelJsonObj.length; i++){
               var data = excelJsonObj[i];

               $('#myTable tbody:last-child').append(
                  "<tr>\
                     <td>"+data.Urut+"</td>\
                     <td>"+data.Kode+"</td>\
                     <td>"+data.Register+"</td>\
                     <td>"+data.Nama_Barang+"</td>\
                     <td>"+data.Merk+"</td>\
                     <td>"+data.No_Sertifikat+"</td>\
                     <td>"+data.Bahan+"</td>\
                     <td>"+data.Asal+"</td>\
                     <td>"+data.Tahun_Pembelian+"</td>\
                     <td>"+data.Ukuran_Barang+"</td>\
                     <td>"+data.Satuan+"</td>\
                     <td>"+data.Keadaan_Barang+"</td>\
                     <td>"+data.Jumlah_Barang+"</td>\
                     <td>"+data.Harga_Barang+"</td>\
                     <td>"+data.Keterangan+"</td>\
                  </tr>");
            }
         };

         reader.readAsBinaryString(input.files[0]);

      };



   }

})();