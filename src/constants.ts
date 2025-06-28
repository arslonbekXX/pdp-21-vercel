import type { Path, Pathname } from './types';

export const REDIRECTS: Record<Path, Pathname> = {
	'/': 'movies',
	'/movies': 'movies',
	'/login': 'login',
	'/register': 'register',
	'/404': '404',
};

export const PAGES: Record<Pathname, string> = {
	movies: `
 <div class="container">
    <div class="row">
     <div class="col-2">
      <ul class="list-group">
       <li class="list-group-item active" aria-current="true">All</li>
       <li class="list-group-item">Action</li>
       <li class="list-group-item">Comedy</li>
       <li class="list-group-item">Romance</li>
       <li class="list-group-item">Triller</li>
      </ul>
     </div>
     <div class="col-10">
      <button class="btn btn-primary mb-3" id="new-movie-btn">New Movie</button>
      <p>Showing 3 movies in the database.</p>
      <input type="text" class="form-control my-3" placeholder="Search..." />
      <table class="table">
       <thead>
        <tr>
         <th>Title</th>
         <th>Genre</th>
         <th>Stock</th>
         <th>Rate</th>
         <th></th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td><a href="">The Notebook</a></td>
         <td>Action</td>
         <td>10</td>
         <td>$20</td>
         <td>🩶</td>
        </tr>
        <tr>
         <td><a href="">Sherlock Holmes</a></td>
         <td>Action</td>
         <td>10</td>
         <td>$20</td>
         <td>🩶</td>
        </tr>
        <tr>
         <td><a href="">Spider man</a></td>
         <td>Action</td>
         <td>10</td>
         <td>$20</td>
         <td>🩶</td>
        </tr>
       </tbody>
      </table>

      <ul class="pagination">
       <li class="page-item active"><a class="page-link" href="#">1</a></li>
       <li class="page-item"><a class="page-link" href="#">2</a></li>
       <li class="page-item"><a class="page-link" href="#">3</a></li>
       <li class="page-item"><a class="page-link" href="#">4</a></li>
       <li class="page-item"><a class="page-link" href="#">5</a></li>
      </ul>
     </div>
    </div>
   </div>
 `,
	login: `
 <div class="container">
			<h1>Login</h1>
			<form action="">
				<div class="mb-3">
					<label for="email" class="form-label">Email</label>
					<input class="form-control" id="email" placeholder="Enter your email" />
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input
						type="password"
						class="form-control"
						id="password"
						placeholder="Enter your password"
					/>
				</div>
				<button class="btn btn-primary" id="login-btn">Login</button>
			</form>
		</div>
 `,
	register: `
		<div class="container">
			<h1>Register</h1>
			<form action="">
				<div class="mb-3">
					<label for="name" class="form-label">Name</label>
					<input class="form-control" id="name" placeholder="Enter your name" />
				</div>
				<div class="mb-3">
					<label for="email" class="form-label">Email</label>
					<input class="form-control" id="email" placeholder="Enter your email" />
				</div>
				<div class="mb-3">
					<label for="password" class="form-label">Password</label>
					<input
						type="password"
						class="form-control"
						id="password"
						placeholder="Enter your password"
					/>
				</div>
				<button class="btn btn-primary" id="register-btn">Register</button>
			</form>
		</div>
 `,
	404: `
	<div class="container">
   <h1>404 Not Found</h1>
   <p>The page you are looking for does not exist.</p>
  </div>
 `,
};

export const LOGICS: Record<Pathname, () => void> = {
	movies: () => console.log('Movies logic initialized'),
	login: () => console.log('Login logic initialized'),
	register: () => {
		const registerBtn = document.getElementById('register-btn') as HTMLButtonElement;
	},
	'404': () => console.log('404 logic initialized'),
};
