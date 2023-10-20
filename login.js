document.write(`
	<main class="login container-fluid">
		<section class="container-fluid">
			<div class="container text-center">
				<div class="row vh-100 align-items-center py-5 pull-middle">
					<div class="col offset-md-3 col-md-6 col-10 my-auto">
						<img src="`+baseurl+`files/img-favicon.png" class="d-block w-20 w-md-30 mx-auto mb-4"/>
						<h5 class="text-uppercase">Enter furfam name</h5><h6 class="mt-2">-- Pet name located at the tag --</h6>
						<input class="mt-3 form-control text-center" autofocus="autofocus" type="text" required/>
						<a class="btn btn-primary mt-4 btn-login"><i class="fa fa-lock"></i> Proceed</a>
					</div>
				</div>
			</div>
		</section>
	</main>
`);
