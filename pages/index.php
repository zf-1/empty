<?
$dir = __DIR__;
$files = scandir($dir);
?>
<ul>	
<?foreach ($files as $value) {
	if(substr($value, 0,1) == '.') continue;
	$name = substr($value, 0,-4);
	?>
	<li><a href="/?page=<?=$name?>"><?=$name;?></a></li>
<?}?>
</ul>
<?