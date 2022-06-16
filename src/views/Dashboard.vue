<template lang="">
    <!-- SIDEBAR -->
	<section id="sidebar">
		<a href="#" class="brand">
			<i class='bx bxs-smile'></i>
			<span class="text">AdminHub</span>
		</a>
		<ul class="side-menu top">
			<li class="active">
				<a href="#">
					<i class='bx bxs-dashboard' ></i>
					<span class="text">Dashboard</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-shopping-bag-alt' ></i>
					<span class="text">My Store</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-doughnut-chart' ></i>
					<span class="text">Analytics</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-message-dots' ></i>
					<span class="text">Message</span>
				</a>
			</li>
			<li>
				<a href="#">
					<i class='bx bxs-group' ></i>
					<span class="text">Team</span>
				</a>
			</li>
		</ul>
		<ul class="side-menu">
			<li>
				<a href="#">
					<i class='bx bxs-cog' ></i>
					<span class="text">Settings</span>
				</a>
			</li>
			<li>
				<a href="#" class="logout">
					<i class='bx bxs-log-out-circle' ></i>
					<span class="text">Logout</span>
				</a>
			</li>
		</ul>
	</section>
	<!-- SIDEBAR -->



	<!-- CONTENT -->
	<section id="content">
		<!-- NAVBAR -->
		<nav>
			<i class='bx bx-menu' ></i>
			<a href="#" class="nav-link">Categories</a>
			<form action="#">
				<div class="form-input">
					<input type="search" placeholder="Search...">
					<button type="submit" class="search-btn"><i class='bx bx-search' ></i></button>
				</div>
			</form>
			<input type="checkbox" id="switch-mode" hidden>
			<label for="switch-mode" class="switch-mode"></label>
			<a href="#" class="notification">
				<i class='bx bxs-bell' ></i>
				<span class="num">8</span>
			</a>
			<a href="#" class="profile">
				<img src="img/people.png">
			</a>
		</nav>
		<!-- NAVBAR -->

		<!-- MAIN -->
		<main>
			<div class="head-title">
				<div class="left">
					<h1>Dashboard</h1>
					<ul class="breadcrumb">
						<li>
							<a href="#">Dashboard</a>
						</li>
						<li><i class='bx bx-chevron-right' ></i></li>
						<li>
							<a class="active" href="#">Home</a>
						</li>
					</ul>
				</div>
				<a href="#" class="btn-download">
					<i class='bx bxs-cloud-download' ></i>
					<span class="text">Download PDF</span>
				</a>
			</div>

			<ul class="box-info">
				<li>
					<i class='bx bxs-calendar-check' ></i>
					<span class="text">
						<h3>1020</h3>
						<p>New Order</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-group' ></i>
					<span class="text">
						<h3>2834</h3>
						<p>Visitors</p>
					</span>
				</li>
				<li>
					<i class='bx bxs-dollar-circle' ></i>
					<span class="text">
						<h3>$2543</h3>
						<p>Total Sales</p>
					</span>
				</li>
			</ul>


			<div class="table-data">
				<div class="order">
					<div class="head">
						<h3>Recent Orders</h3>
						<i class='bx bx-search' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<table>
						<thead>
							<tr>
								<th>User</th>
								<th>Date Order</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status process">Process</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status pending">Pending</span></td>
							</tr>
							<tr>
								<td>
									<img src="img/people.png">
									<p>John Doe</p>
								</td>
								<td>01-10-2021</td>
								<td><span class="status completed">Completed</span></td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="todo">
					<div class="head">
						<h3>Todos</h3>
						<i class='bx bx-plus' ></i>
						<i class='bx bx-filter' ></i>
					</div>
					<ul class="todo-list">
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
						<li class="not-completed">
							<p>Todo List</p>
							<i class='bx bx-dots-vertical-rounded' ></i>
						</li>
					</ul>
				</div>
			</div>
		</main>
		<!-- MAIN -->
	</section>
	<!-- CONTENT -->
	
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');

* {
	margin: 0 !important;
	padding: 0 !important;
	box-sizing: border-box !important;
}

a {
	text-decoration: none !important;
}

li {
	list-style: none !important;
}

:root {
	--poppins: 'Poppins', sans-serif !important;
	--lato: 'Lato', sans-serif !important;

	--light: #F9F9F9 !important;
	--blue: #3C91E6 !important;
	--light-blue: #CFE8FF !important;
	--grey: #eee !important;
	--dark-grey: #AAAAAA !important;
	--dark: #342E37 !important;
	--red: #DB504A !important;
	--yellow: #FFCE26 !important;
	--light-yellow: #FFF2C6 !important;
	--orange: #FD7238 !important;
	--light-orange: #FFE0D3 !important;
}

html {
	overflow-x: hidden !important;
}

body.dark {
	--light: #0C0C1E !important;
	--grey: #060714 !important;
	--dark: #FBFBFB !important;
}

body {
	background: var(--grey) !important;
	overflow-x: hidden !important;
}





/* SIDEBAR */
#sidebar {
	position: fixed !important;
	top: 0 !important;
	left: 0 !important;
	width: 280px !important;
	height: 100% !important;
	background: var(--light) !important;
	z-index: 2000 !important;
	font-family: var(--lato) !important;
	transition: .3s ease !important;
	overflow-x: hidden !important;
	scrollbar-width: none !important;
}
#sidebar::--webkit-scrollbar {
	display: none !important;
}
#sidebar.hide {
	width: 60px !important;
}
#sidebar .brand {
	font-size: 24px !important;
	font-weight: 700 !important;
	height: 56px !important;
	display: flex !important;
	align-items: center !important;
	color: var(--blue) !important;
	position: sticky !important;
	top: 0 !important;
	left: 0 !important;
	background: var(--light) !important;
	z-index: 500 !important;
	padding-bottom: 20px !important;
	box-sizing: content-box !important;
}
#sidebar .brand .bx {
	min-width: 60px !important;
	display: flex !important;
	justify-content: center !important;
}
#sidebar .side-menu {
	width: 100% !important;
	margin-top: 48px !important;
}
#sidebar .side-menu li {
	height: 48px !important;
	background: transparent !important;
	margin-left: 6px !important;
	border-radius: 48px 0 0 48px !important;
	padding: 4px !important;
}
#sidebar .side-menu li.active {
	background: var(--grey) !important;
	position: relative !important;
}
#sidebar .side-menu li.active::before {
	content: '' !important;
	position: absolute !important;
	width: 40px !important;
	height: 40px !important;
	border-radius: 50% !important;
	top: -40px !important;
	right: 0 !important;
	box-shadow: 20px 20px 0 var(--grey) !important;
	z-index: -1 !important;
}
#sidebar .side-menu li.active::after {
	content: '' !important;
	position: absolute !important;
	width: 40px !important;
	height: 40px !important;
	border-radius: 50% !important;
	bottom: -40px !important;
	right: 0 !important;
	box-shadow: 20px -20px 0 var(--grey) !important;
	z-index: -1 !important;
}
#sidebar .side-menu li a {
	width: 100% !important;
	height: 100% !important;
	background: var(--light) !important;
	display: flex !important;
	align-items: center !important;
	border-radius: 48px !important;
	font-size: 16px !important;
	color: var(--dark) !important;
	white-space: nowrap !important;
	overflow-x: hidden !important;
}
#sidebar .side-menu.top li.active a {
	color: var(--blue) !important;
}
#sidebar.hide .side-menu li a {
	width: calc(48px - (4px * 2)) !important;
	transition: width .3s ease !important;
}
#sidebar .side-menu li a.logout {
	color: var(--red) !important;
}
#sidebar .side-menu.top li a:hover {
	color: var(--blue) !important;
}
#sidebar .side-menu li a .bx {
	min-width: calc(60px  - ((4px + 6px) * 2)) !important;
	display: flex !important;
	justify-content: center !important;
}
/* SIDEBAR */





/* CONTENT */
#content {
	position: relative !important;
	width: calc(100% - 280px) !important;
	left: 280px !important;
	transition: .3s ease !important;
}
#sidebar.hide ~ #content {
	width: calc(100% - 60px) !important;
	left: 60px !important;
}




/* NAVBAR */
#content nav {
	height: 56px !important;
	background: var(--light) !important;
	padding: 0 24px !important;
	display: flex !important;
	align-items: center !important;
	grid-gap: 24px !important;
	font-family: var(--lato) !important;
	position: sticky !important;
	top: 0 !important;
	left: 0 !important;
	z-index: 1000 !important;
}
#content nav::before {
	content: '' !important;
	position: absolute !important;
	width: 40px !important;
	height: 40px !important;
	bottom: -40px !important;
	left: 0 !important;
	border-radius: 50% !important;
	box-shadow: -20px -20px 0 var(--light) !important;
}
#content nav a {
	color: var(--dark) !important;
}
#content nav .bx.bx-menu {
	cursor: pointer !important;
	color: var(--dark) !important;
}
#content nav .nav-link {
	font-size: 16px !important;
	transition: .3s ease !important;
}
#content nav .nav-link:hover {
	color: var(--blue) !important;
}
#content nav form {
	max-width: 400px !important;
	width: 100% !important;
	margin-right: auto !important;
}
#content nav form .form-input {
	display: flex !important;
	align-items: center !important;
	height: 36px !important;
}
#content nav form .form-input input {
	flex-grow: 1 !important;
	padding: 0 16px !important;
	height: 100% !important;
	border: none !important;
	background: var(--grey) !important;
	border-radius: 36px 0 0 36px !important;
	outline: none !important;
	width: 100% !important;
	color: var(--dark) !important;
}
#content nav form .form-input button {
	width: 36px !important;
	height: 100% !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	background: var(--blue) !important;
	color: var(--light) !important;
	font-size: 18px !important;
	border: none !important;
	outline: none !important;
	border-radius: 0 36px 36px 0 !important;
	cursor: pointer !important;
}
#content nav .notification {
	font-size: 20px !important;
	position: relative !important;
}
#content nav .notification .num {
	position: absolute !important;
	top: -6px !important;
	right: -6px !important;
	width: 20px !important;
	height: 20px !important;
	border-radius: 50% !important;
	border: 2px solid var(--light) !important;
	background: var(--red) !important;
	color: var(--light) !important;
	font-weight: 700 !important;
	font-size: 12px !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
}
#content nav .profile img {
	width: 36px !important;
	height: 36px !important;
	object-fit: cover !important;
	border-radius: 50% !important;
}
#content nav .switch-mode {
	display: block !important;
	min-width: 50px !important;
	height: 25px !important;
	border-radius: 25px !important;
	background: var(--grey) !important;
	cursor: pointer !important;
	position: relative !important;
}
#content nav .switch-mode::before {
	content: '' !important;
	position: absolute !important;
	top: 2px !important;
	left: 2px !important;
	bottom: 2px !important;
	width: calc(25px - 4px) !important;
	background: var(--blue) !important;
	border-radius: 50% !important;
	transition: all .3s ease !important;
}
#content nav #switch-mode:checked + .switch-mode::before {
	left: calc(100% - (25px - 4px) - 2px) !important;
}
/* NAVBAR */





/* MAIN */
#content main {
	width: 100% !important;
	padding: 36px 24px !important;
	font-family: var(--poppins) !important;
	max-height: calc(100vh - 56px) !important;
	overflow-y: auto !important;
}
#content main .head-title {
	display: flex !important;
	align-items: center !important;
	justify-content: space-between !important;
	grid-gap: 16px !important;
	flex-wrap: wrap !important;
}
#content main .head-title .left h1 {
	font-size: 36px !important;
	font-weight: 600 !important;
	margin-bottom: 10px !important;
	color: var(--dark) !important;
}
#content main .head-title .left .breadcrumb {
	display: flex !important;
	align-items: center !important;
	grid-gap: 16px !important;
}
#content main .head-title .left .breadcrumb li {
	color: var(--dark) !important;
}
#content main .head-title .left .breadcrumb li a {
	color: var(--dark-grey) !important;
	pointer-events: none !important;
}
#content main .head-title .left .breadcrumb li a.active {
	color: var(--blue) !important;
	pointer-events: unset !important;
}
#content main .head-title .btn-download {
	height: 36px !important;
	padding: 0 16px !important;
	border-radius: 36px !important;
	background: var(--blue) !important;
	color: var(--light) !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
	grid-gap: 10px !important;
	font-weight: 500 !important;
}




#content main .box-info {
	display: grid !important;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)) !important;
	grid-gap: 24px !important;
	margin-top: 36px !important;
}
#content main .box-info li {
	padding: 24px !important;
	background: var(--light) !important;
	border-radius: 20px !important;
	display: flex !important;
	align-items: center !important;
	grid-gap: 24px !important;
}
#content main .box-info li .bx {
	width: 80px !important;
	height: 80px !important;
	border-radius: 10px !important;
	font-size: 36px !important;
	display: flex !important;
	justify-content: center !important;
	align-items: center !important;
}
#content main .box-info li:nth-child(1) .bx {
	background: var(--light-blue) !important;
	color: var(--blue) !important;
}
#content main .box-info li:nth-child(2) .bx {
	background: var(--light-yellow) !important;
	color: var(--yellow) !important;
}
#content main .box-info li:nth-child(3) .bx {
	background: var(--light-orange) !important;
	color: var(--orange) !important;
}
#content main .box-info li .text h3 {
	font-size: 24px !important;
	font-weight: 600 !important;
	color: var(--dark) !important;
}
#content main .box-info li .text p {
	color: var(--dark) !important;	
}





#content main .table-data {
	display: flex !important;
	flex-wrap: wrap !important;
	grid-gap: 24px !important;
	margin-top: 24px !important;
	width: 100% !important;
	color: var(--dark) !important;
}
#content main .table-data > div {
	border-radius: 20px !important;
	background: var(--light) !important;
	padding: 24px !important;
	overflow-x: auto !important;
}
#content main .table-data .head {
	display: flex !important;
	align-items: center !important;
	grid-gap: 16px !important;
	margin-bottom: 24px !important;
}
#content main .table-data .head h3 {
	margin-right: auto !important;
	font-size: 24px !important;
	font-weight: 600 !important;
}
#content main .table-data .head .bx {
	cursor: pointer !important;
}

#content main .table-data .order {
	flex-grow: 1 !important;
	flex-basis: 500px !important;
}
#content main .table-data .order table {
	width: 100% !important;
	border-collapse: collapse !important;
}
#content main .table-data .order table th {
	padding-bottom: 12px !important;
	font-size: 13px !important;
	text-align: left !important;
	border-bottom: 1px solid var(--grey) !important;
}
#content main .table-data .order table td {
	padding: 16px 0 !important;
}
#content main .table-data .order table tr td:first-child {
	display: flex !important;
	align-items: center !important;
	grid-gap: 12px !important;
	padding-left: 6px !important;
}
#content main .table-data .order table td img {
	width: 36px !important;
	height: 36px !important;
	border-radius: 50% !important;
	object-fit: cover !important;
}
#content main .table-data .order table tbody tr:hover {
	background: var(--grey) !important;
}
#content main .table-data .order table tr td .status {
	font-size: 10px !important;
	padding: 6px 16px !important;
	color: var(--light) !important;
	border-radius: 20px !important;
	font-weight: 700 !important;
}
#content main .table-data .order table tr td .status.completed {
	background: var(--blue) !important;
}
#content main .table-data .order table tr td .status.process {
	background: var(--yellow) !important;
}
#content main .table-data .order table tr td .status.pending {
	background: var(--orange) !important;
}


#content main .table-data .todo {
	flex-grow: 1 !important;
	flex-basis: 300px !important;
}
#content main .table-data .todo .todo-list {
	width: 100% !important;
}
#content main .table-data .todo .todo-list li {
	width: 100% !important;
	margin-bottom: 16px !important;
	background: var(--grey) !important;
	border-radius: 10px !important;
	padding: 14px 20px !important;
	display: flex !important;
	justify-content: space-between !important;
	align-items: center !important;
}
#content main .table-data .todo .todo-list li .bx {
	cursor: pointer !important;
}
#content main .table-data .todo .todo-list li.completed {
	border-left: 10px solid var(--blue) !important;
}
#content main .table-data .todo .todo-list li.not-completed {
	border-left: 10px solid var(--orange) !important;
}
#content main .table-data .todo .todo-list li:last-child {
	margin-bottom: 0 !important;
}
/* MAIN */
/* CONTENT */









@media screen and (max-width: 768px) {
	#sidebar {
		width: 200px;
	}

	#content {
		width: calc(100% - 60px);
		left: 200px;
	}

	#content nav .nav-link {
		display: none;
	}
}






@media screen and (max-width: 576px) {
	#content nav form .form-input input {
		display: none;
	}

	#content nav form .form-input button {
		width: auto;
		height: auto;
		background: transparent;
		border-radius: none;
		color: var(--dark);
	}

	#content nav form.show .form-input input {
		display: block;
		width: 100%;
	}
	#content nav form.show .form-input button {
		width: 36px;
		height: 100%;
		border-radius: 0 36px 36px 0;
		color: var(--light);
		background: var(--red);
	}

	#content nav form.show ~ .notification,
	#content nav form.show ~ .profile {
		display: none;
	}

	#content main .box-info {
		grid-template-columns: 1fr;
	}

	#content main .table-data .head {
		min-width: 420px;
	}
	#content main .table-data .order table {
		min-width: 420px;
	}
	#content main .table-data .todo .todo-list {
		min-width: 420px;
	}
}
</style>