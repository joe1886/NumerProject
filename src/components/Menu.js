import React, { Component } from 'react';
import style from './Menu.css';

export default class Menu extends Component {
  render() {
    return (
      <ul className={style.Menu}>
        <li><a href="/index.html">Home</a></li>
        <li><a href="/ROOTOFEQUATION/Bisection.html">Bisection Method</a></li>
        <li><a href="/ROOTOFEQUATION/Flaseposition.html">False position Method</a></li>
        <li><a href="/ROOTOFEQUATION/Onepoint.html">One-point iteration Method</a></li>
        <li><a href="/ROOTOFEQUATION/Newton.html">Newton raphson Method</a></li>
        <li><a href="/ROOTOFEQUATION/Secant.html">Secant Method</a></li>
        <li><a href="/MATRIXALGEBRA/CramersRule.html">Cramer's Rule</a></li>
        <li><a href="/MATRIXALGEBRA/Gauss Elimination.html">Gauss Elimination Method</a></li>
        
        <li><a href="/MATRIXALGEBRA/Metrixin.html">Matrix Inversion Method</a></li>
        <li><a href="/MATRIXALGEBRA/LU.html">LU Decomposition Method</a></li>
        <li><a href="/MATRIXALGEBRA/Cholesky.html">Cholesky Decomposition Method</a></li>
        <li><a href="/MATRIXALGEBRA/Jacobi.html">Jacobi Iteration Method</a></li>
        <li><a href="/MATRIXALGEBRA/Gausssei.html">Gauss-Seidel Method</a></li>
        <li><a href="/MATRIXALGEBRA/Conjugate.html">Conjugate Gradient Method</a></li>
      </ul>
    );
  }
}
