$(document).ready(function () {
   /* Apply Multiple CSS Properties */
   $('p').IEcss('lt:8', {
   	'background': 'yellow'
   });

   /* Apply Single CSS Property */
   $('p').IEcss('lt:8', 'backgroundColor', 'red');

   /* Get the Current CSS Property Value */
   alert($('p').IEcss('lt:8', 'backgroundColor'));
});
