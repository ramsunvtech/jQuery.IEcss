jQuery.IEcss
============

This jQuery Plugin is helps to Update your Specific Styles for IE7, IE8, IE9 Browser and future IE browsers.

<code>
<pre>
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
</pre>
</code>

<h2>How it Works?</h2>
<p>This Plugin will read the browser information from the 'navigator.userAgent' object</p>

<h2>Points to Remember</h2>
<p>
<ul>
 <li>The First Arguement of IE condition is mandatory and soon it will be removed and you can add the IE Condition as a global value in future version</li>
</ul>
</p>

<h2>Options</h2>
<dl>
  <dt>IE condition</dt>
    <dd>You can add the folloing conditons
    <ol>
      <li>lt:8 (lesser than)</li>
      <li>lte:8 (lesser than and equal to)</li>
      <li>gt:8 (greater than)</li>
      <li>gte:8 (greater than and equal to)</li>
      <li>gte:8 (equal to)</li>
    </ol>
    </dd>
  <dt>CSS Style Object / Property Name</dt>
    <dd>You can declare the `Style Object` / Only `Property Name`.</dd>
  <dt>Property Value</dt>
    <dd>You can add the `Property Value` if your second arguement is `Property Name`.</dd>
</dl>
