import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

const options = {
  vatRate: 0.08,
  freeShipFrom: 500000,
  shipFee: 30000
}

test('empty cart returns zero', () => {
  assert.equal(cartTotal([], options), 0)
})

test('shipping is charged below the threshold', () => {
  const items = [{ price: 400000, qty: 1 }]
  assert.equal(cartTotal(items, options), 462000)
})

test('shipping is free exactly at the threshold', () => {
  const items = [{ price: 250000, qty: 2 }]
  assert.equal(cartTotal(items, options), 540000)
})

test('shipping is free above the threshold', () => {
  const items = [{ price: 600000, qty: 1 }]
  assert.equal(cartTotal(items, options), 648000)
})

test('free shipping uses subtotal before VAT', () => {
  const items = [{ price: 90, qty: 1 }]
  const customOptions = {
    vatRate: 0.2,
    freeShipFrom: 100,
    shipFee: 10
  }

  assert.equal(cartTotal(items, customOptions), 118)
})

test('negative price throws RangeError', () => {
  const items = [{ price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('zero quantity throws RangeError', () => {
  const items = [{ price: 100, qty: 0 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('negative quantity throws RangeError', () => {
  const items = [{ price: 100, qty: -1 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('non-integer quantity throws RangeError', () => {
  const items = [{ price: 100, qty: 1.5 }]
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('total is rounded to the nearest whole dong', () => {
  const items = [{ price: 100, qty: 1 }]
  const customOptions = {
    vatRate: 0.005,
    freeShipFrom: 200,
    shipFee: 0
  }

  assert.equal(cartTotal(items, customOptions), 101)
})

test('total is returned as a number', () => {
  const items = [{ price: 100, qty: 1 }]
  assert.equal(typeof cartTotal(items, options), 'number')
})
git diff -- src/cart.js