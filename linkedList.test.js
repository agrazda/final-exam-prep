'use strict';


const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const { describe } = require('yargs');
const LinkedList = require('./LinkedList/linkedList.js')

describe('insert', () => {
    test('adds the Node to the begging of the list', () => {
        const newList = new LinkedList()
        newList.insert(10);
        const oldHead = newList.head
        newList.insert(20);

        expect(newList.head.value).toBe(20)
        expect(newList.head.next).toBe(oldHead)
        expect(newList.length).toBe(2)

    }) 
})

describe('getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const newList = LinkedList.fromValues(10,20)

            expect(newList.getByIndex(-1)).toBeNull()
        })
    })


    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const newList = LinkedList.fromValues(10,20)

            expect(newList.getByIndex(5)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const newList = LinkedList.fromValues(10, 20)

            expect(newList.getByIndex(0).value).toBe(1)
        })
    })

    describe('with index in the middle', () => {
        test('it returns the node at that index', () => {
            const newList = LinkedList.fromValues(10, 20, 30, 40)

            expect(newList.getByIndex(2).value).toBe(30)
        })
    })

})