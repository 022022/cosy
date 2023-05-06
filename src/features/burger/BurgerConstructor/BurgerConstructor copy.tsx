import { useEffect, useState } from 'react';
import { BurgerImage } from '../BurgerImage/BurgerImage';
import { BurgerOptionsList } from '../BurgerOptionsList/BurgerOptionsList';
import { BurgerOrderDetails } from '../BurgerOrderDetails/BurgerOrderDetails';
import { BurgerOptionsType } from '../types/types';
import { HealthyMode } from '../HealthyMode/HealthyMode';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getBurger, selectBurger } from '../burgerSlice';

export function BurgerConstructor() {
	//const burgerData = useAppSelector(selectBurger);
	//const dispatch = useAppDispatch();

	//useEffect(() => dispatch(getBurger()), [dispatch]);

	//const burgerIngredients = burgerData.burger;
	const burgerIngredients = [
		{
			category: 'Булочка',
			type: BurgerOptionsType.radio,
			options: [
				{
					id: '01_bread-sesame-top',
					value: 'С кунжутом',
					added: true,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: 'С кунжутом ...',
					},
					visual: {
						width: 382,
						height: 202,
						bottom: {
							id: '09_bread-sesame-bottom',
							visual: { width: 371, height: 204 },
						},
					},
				},
				{
					id: '01_bread-siberia-top',
					value: 'Сибирская',
					added: false,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: 'С кунжутом ...',
					},
					visual: {
						width: 382,
						height: 202,
						bottom: {
							id: '09_bread-siberia-bottom',
							visual: { width: 371, height: 204 },
						},
					},
				},
			],
		},
		{
			category: 'Котлета',
			type: BurgerOptionsType.radio,
			options: [
				{
					id: '07_beef',
					value: 'Говядина',
					added: true,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 383, height: 160, bottom: null },
				},
				{
					id: '07_chicken',
					value: 'Курица',
					added: false,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 383, height: 160, bottom: null },
				},
			],
		},
		{
			category: 'Овощи',
			type: BurgerOptionsType.checkbox,
			options: [
				{
					id: '02_onions',
					value: 'Лук',
					added: true,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 323, height: 124, bottom: null },
				},
				{
					id: '03_salad',
					value: 'Салат',
					added: false,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 349, height: 232, bottom: null },
				},
				{
					id: '04_pickles',
					value: 'Соленые огурцы',
					added: true,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 396, height: 167, bottom: null },
				},
				{
					id: '05_pomodoro',
					value: 'Помидоры',
					added: false,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 398, height: 138, bottom: null },
				},
			],
		},

		{
			category: 'Сыр',
			type: BurgerOptionsType.checkbox,
			options: [
				{
					id: '06_cheese',
					value: 'Чеддер',
					added: true,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 422, height: 298, bottom: null },
				},
				{
					id: '06_mozarella',
					value: 'Моцарелла',
					added: true,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 389, height: 152, bottom: null },
				},
			],
		},

		{
			category: 'Добавки',
			type: BurgerOptionsType.checkbox,
			options: [
				{
					id: '08_bacon',
					value: 'Бекон',
					added: false,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 341, height: 196, bottom: null },
				},
				{
					id: '08_ananas',
					value: 'Ананас',
					added: false,
					info: {
						weight: 120,
						cost: 100,
						calories: 200,
						protein: 20,
						carbs: 70,
						fat: 80,
						about: ' ...',
					},
					visual: { width: 365, height: 154, bottom: null },
				},
			],
		},
	];

	return <div className='burger__wrapper'></div>;
}
