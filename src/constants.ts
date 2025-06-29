import { loginInit, moviesInit, registerInit, notFoundInit } from './pages';
import type { Path, Pathname } from './types';

export const REDIRECTS: Record<Path, Pathname> = {
	'/': 'movies',
	'/movies': 'movies',
	'/login': 'login',
	'/register': 'register',
	'/not-found': 'not-found',
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
	'not-found': `
	<div class="container">
   <h1>404 Not Found</h1>
   <p>The page you are looking for does not exist.</p>
  </div>
 `,
};

export const LOGICS: Record<Pathname, () => void> = {
	movies: moviesInit,
	login: loginInit,
	register: registerInit,
	'not-found': notFoundInit,
};
