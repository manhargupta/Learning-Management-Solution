Synopsis
This Project contain API for Learning-Management-Solution.

Installation
run npm start and open localhost:7777

API Reference (POSTMAN JSON API's)
{
	"item": [
		{
			"name": "Courses",
			"description": null,
			"item": [
				{
					"name": "get all courses",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses"
							]
						}
					},
					"response": []
				},
				{
					"name": "course by id",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "add course",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "Summer Camp",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses"
							]
						}
					},
					"response": []
				},
				{
					"name": "update course",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "Summer Camp 3",
									"description": "",
									"type": "text"
								},
								{
									"key": "id",
									"value": "4",
									"description": "",
									"type": "text",
									"disabled": true
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses/3",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete course",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "Summer Camp 3",
									"description": "",
									"type": "text",
									"disabled": true
								},
								{
									"key": "id",
									"value": "4",
									"description": "",
									"type": "text",
									"disabled": true
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses/4",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"4"
							]
						}
					},
					"response": []
				},
				{
					"name": "get batch",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/1/batches",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1",
								"batches"
							]
						}
					},
					"response": []
				},
				{
					"name": "get batch by id",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/2/batches/3",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"batches",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "add batch",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "2018 winters",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses/1/batches",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1",
								"batches"
							]
						}
					},
					"response": []
				},
				{
					"name": "update batch by id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "qwe",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses/2/batches/3",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"batches",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete batch by id",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/2/batches/3",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"batches",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "get lectures",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/1/batches/1/lectures",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1",
								"batches",
								"1",
								"lectures"
							]
						}
					},
					"response": []
				},
				{
					"name": "get lectures by id",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/2/batches/1/lectures/6",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"batches",
								"1",
								"lectures",
								"6"
							]
						}
					},
					"response": []
				},
				{
					"name": "add lecture",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "L4",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses/1/batches/1/lectures/1/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1",
								"batches",
								"1",
								"lectures",
								"1",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "update lectures by id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "l345",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses/2/batches/1/lectures/6",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"batches",
								"1",
								"lectures",
								"6"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete lectures by id",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/2/batches/1/lectures/7",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"batches",
								"1",
								"lectures",
								"7"
							]
						}
					},
					"response": []
				},
				{
					"name": "get course subjects",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/2/subjects",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"subjects"
							]
						}
					},
					"response": []
				},
				{
					"name": "add course subjects",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "maths",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/courses/1/subjects",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1",
								"subjects"
							]
						}
					},
					"response": []
				},
				{
					"name": "get course subjects by id",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/2/subjects/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"2",
								"subjects",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "get batch teachers",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/1/batches/1/teachers",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1",
								"batches",
								"1",
								"teachers"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Teachers",
			"description": "",
			"item": [
				{
					"name": "get teachers",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "latika",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/teachers",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"teachers"
							]
						}
					},
					"response": []
				},
				{
					"name": "add teacher",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "JP",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/teachers/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"teachers",
								"1"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Students",
			"description": "",
			"item": [
				{
					"name": "get students",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/students",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"students"
							]
						}
					},
					"response": []
				},
				{
					"name": "get student by id",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/students/4",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"students",
								"4"
							]
						}
					},
					"response": []
				},
				{
					"name": "add student",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "manhar",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/students/1/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"students",
								"1",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete student",
					"request": {
						"method": "DELETE",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/students/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"students",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "update students",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "aa",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/students/2",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"students",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "get students batches",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/students/4/batches",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"students",
								"4",
								"batches"
							]
						}
					},
					"response": []
				},
				{
					"name": "add batch to existing student",
					"request": {
						"method": "POST",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/students/4/courses/2/batches/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"students",
								"4",
								"courses",
								"2",
								"batches",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "get batch students",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/courses/1/batches/1/students",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"courses",
								"1",
								"batches",
								"1",
								"students"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Subjects",
			"description": "",
			"item": [
				{
					"name": "get subjects",
					"request": {
						"method": "GET",
						"header": [],
						"body": {},
						"url": {
							"raw": "localhost:7777/subjects/",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"subjects",
								""
							]
						}
					},
					"response": []
				},
				{
					"name": "add subjects",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded"
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "english",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/subjects/courses/1",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"subjects",
								"courses",
								"1"
							]
						}
					},
					"response": []
				},
				{
					"name": "get subject by id",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"disabled": true
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "english",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/subjects/2",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"subjects",
								"2"
							]
						}
					},
					"response": []
				},
				{
					"name": "delete subject by id",
					"request": {
						"method": "DELETE",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"disabled": true
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "english",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/subjects/3",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"subjects",
								"3"
							]
						}
					},
					"response": []
				},
				{
					"name": "update subject by id",
					"request": {
						"method": "PUT",
						"header": [
							{
								"key": "Content-Type",
								"value": "application/x-www-form-urlencoded",
								"disabled": true
							}
						],
						"body": {
							"mode": "urlencoded",
							"urlencoded": [
								{
									"key": "name",
									"value": "english 2",
									"description": "",
									"type": "text"
								}
							]
						},
						"url": {
							"raw": "localhost:7777/subjects/2",
							"host": [
								"localhost"
							],
							"port": "7777",
							"path": [
								"subjects",
								"2"
							]
						}
					},
					"response": []
				}
			]
		}
	]
}