import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Blog from './components/Blog'
import BlogPost from './components/BlogPost'
import Categories from './components/Categories'
import Category from './components/Category'
import Customers from './components/Customers'
import Customer from './components/Customer'
import Faq from './components/Faq'
import Homepage from './components/Homepage'

import "./styles/style.css"
const AppRouter = () => (
  <Router>
    <div>
      <Route path='/' exact component={Homepage} />
      <Route path='/blog/:page' exact component={Blog} />
      <Route path='/blog' exact component={Blog} />
      <Route path='/blog/posts/:post' component={BlogPost} />
      <Route path='/blog/categories' exact component={Categories} />
      <Route path='/blog/category/:category' exact component={Category} />
      <Route path='/customers' exact component={Customers} />
      <Route path='/customer/:customer' component={Customer} />
      <Route path='/faq' component={Faq} />
    </div>
  </Router>
)

ReactDOM.render(<AppRouter />, document.getElementById('root'))
