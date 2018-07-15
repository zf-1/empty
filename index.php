<? require 'head.php'; ?>
	<? if (isset($_GET['page'])) {
		include './pages/'.$_GET['page'].'.php';
	}else{
		include './pages/main.php';
	}?>
<? require 'footer.php'; ?>