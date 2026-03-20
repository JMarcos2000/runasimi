-- ============================================================
-- SEED PLAN A1 — Quechua Sureño (Cusco-Collao)
-- 60 lecciones + 60 ejercicios tipo choice
-- Idempotente: limpia lecciones anteriores (cascade en exercises)
-- ============================================================

BEGIN;

-- Limpieza: DELETE cascade elimina exercises y user_progress asociados
DELETE FROM public.lessons;

-- ============================================================
-- LECCIONES DÍAS 1–30
-- ============================================================
INSERT INTO public.lessons (id, title, description, "order", day_number, topic, example_quechua, example_translation, phrase_of_day) VALUES

-- Bloque 1: Saludos y presentaciones
('a1000001-0000-0000-0000-000000000001',
 'Día 1 – Saludos formales',
 'Aprende el saludo formal del Quechua Sureño.',
 1, 1, 'Saludos',
 'Napaykullayki',
 'Hola (saludo formal)',
 'Napaykullayki — el saludo que abre puertas'),

('a1000002-0000-0000-0000-000000000002',
 'Día 2 – ¿Cómo estás?',
 'Pregunta por el bienestar de alguien.',
 2, 2, 'Saludos',
 'Allillanchu?',
 '¿Estás bien?',
 'Allillanchu — muestra que te importa el otro'),

('a1000003-0000-0000-0000-000000000003',
 'Día 3 – Estoy bien',
 'Responde cómo te encuentras.',
 3, 3, 'Saludos',
 'Allillanmi',
 'Estoy bien',
 'Allillanmi — la respuesta que tranquiliza'),

('a1000004-0000-0000-0000-000000000004',
 'Día 4 – ¿Cómo te llamas?',
 'Pregunta el nombre de alguien.',
 4, 4, 'Presentaciones',
 'Ima sutiykim?',
 '¿Cómo te llamas?',
 'Ima sutiykim — empieza cada amistad con esta pregunta'),

('a1000005-0000-0000-0000-000000000005',
 'Día 5 – Mi nombre es',
 'Presenta tu nombre en quechua.',
 5, 5, 'Presentaciones',
 'Sutiyqa Mariami',
 'Mi nombre es María',
 'Sutiy — tu nombre es tu identidad'),

('a1000006-0000-0000-0000-000000000006',
 'Día 6 – ¿De dónde eres?',
 'Pregunta el origen de alguien.',
 6, 6, 'Presentaciones',
 'Maymantam kanki?',
 '¿De dónde eres?',
 'Maymantam kanki — el origen conecta personas'),

('a1000007-0000-0000-0000-000000000007',
 'Día 7 – Soy de Cusco',
 'Dice de dónde eres.',
 7, 7, 'Presentaciones',
 'Qusqumanta kani',
 'Soy de Cusco',
 'Qusqumanta kani — la ciudad del sol en el corazón'),

('a1000008-0000-0000-0000-000000000008',
 'Día 8 – Hasta luego',
 'Despedida formal.',
 8, 8, 'Saludos',
 'Tinkunanchiskama',
 'Hasta que nos veamos',
 'Tinkunanchiskama — no es adiós, es hasta pronto'),

('a1000009-0000-0000-0000-000000000009',
 'Día 9 – Hasta mañana',
 'Despedida para el día siguiente.',
 9, 9, 'Saludos',
 'Paqarinkamacha',
 'Hasta mañana',
 'Paqarinkamacha — promesa de volver'),

('a1000010-0000-0000-0000-000000000010',
 'Día 10 – Gracias',
 'Expresar gratitud en quechua.',
 10, 10, 'Cortesía',
 'Sulpayki',
 'Gracias (a ti)',
 'Sulpayki — la gratitud fortalece la comunidad'),

-- Bloque 2: Números
('a1000011-0000-0000-0000-000000000011',
 'Día 11 – Números 1, 2, 3',
 'Los primeros tres números en quechua.',
 11, 11, 'Números',
 'Huk, iskay, kimsa',
 'Uno, dos, tres',
 'Huk hatun hatun — un gran grande paso'),

('a1000012-0000-0000-0000-000000000012',
 'Día 12 – Números 4, 5, 6',
 'Del cuatro al seis en quechua.',
 12, 12, 'Números',
 'Tawa, pichqa, suqta',
 'Cuatro, cinco, seis',
 'Tawa chakikunawan purin — camina con cuatro patas'),

('a1000013-0000-0000-0000-000000000013',
 'Día 13 – Números 7, 8, 9',
 'Del siete al nueve en quechua.',
 13, 13, 'Números',
 'Qanchis, pusaq, isqun',
 'Siete, ocho, nueve',
 'Qanchis p''unchay — siete días tiene la semana'),

('a1000014-0000-0000-0000-000000000014',
 'Día 14 – Número 10',
 'El número diez en quechua.',
 14, 14, 'Números',
 'Chunka',
 'Diez',
 'Chunka watayuqmi kani — tengo diez años'),

-- Bloque 3: Colores
('a1000015-0000-0000-0000-000000000015',
 'Día 15 – Rojo y amarillo',
 'Los colores rojo y amarillo en quechua.',
 15, 15, 'Colores',
 'Puka, q''ello',
 'Rojo, amarillo',
 'Puka suyum — la tierra roja'),

('a1000016-0000-0000-0000-000000000016',
 'Día 16 – Verde y azul',
 'Los colores verde y azul en quechua.',
 16, 16, 'Colores',
 'Qomer, anqas',
 'Verde, azul',
 'Qomer pacha — la tierra verde'),

('a1000017-0000-0000-0000-000000000017',
 'Día 17 – Blanco y negro',
 'Los colores blanco y negro en quechua.',
 17, 17, 'Colores',
 'Yuraq, yana',
 'Blanco, negro',
 'Yuraq qaqa — la roca blanca'),

-- Bloque 4: Rutina y tiempo
('a1000018-0000-0000-0000-000000000018',
 'Día 18 – Rutina',
 'Habla de tu rutina diaria.',
 18, 18, 'Rutina',
 'Puñuni tutamanta',
 'Duermo en la noche',
 'Puñuni tutamanta — el cuerpo pide descanso'),

('a1000019-0000-0000-0000-000000000019',
 'Día 19 – Mañana',
 'La palabra para mañana (parte del día).',
 19, 19, 'Tiempo',
 'Tutamanta',
 'En la mañana',
 'Tutamanta inti lliphipin — el sol brilla en la mañana'),

('a1000020-0000-0000-0000-000000000020',
 'Día 20 – Tarde y noche',
 'Las partes del día: tarde y noche.',
 20, 20, 'Tiempo',
 'Chisintin, tuta',
 'Tarde, noche',
 'Tuta q''ayanpi — en la oscuridad de la noche'),

-- Bloque 5: Pronombres
('a1000021-0000-0000-0000-000000000021',
 'Día 21 – Yo',
 'El pronombre personal "yo".',
 21, 21, 'Pronombres',
 'Nuqa',
 'Yo',
 'Nuqa runasimita yachakuni — yo aprendo quechua'),

('a1000022-0000-0000-0000-000000000022',
 'Día 22 – Tú',
 'El pronombre personal "tú".',
 22, 22, 'Pronombres',
 'Qam',
 'Tú',
 'Qam allin runa kanki — tú eres buena persona'),

('a1000023-0000-0000-0000-000000000023',
 'Día 23 – Él / Ella',
 'El pronombre de tercera persona.',
 23, 23, 'Pronombres',
 'Pay',
 'Él / Ella',
 'Pay Qusqumanta — él/ella es de Cusco'),

('a1000024-0000-0000-0000-000000000024',
 'Día 24 – Nosotros',
 'El pronombre para "nosotros".',
 24, 24, 'Pronombres',
 'Nuqanchis',
 'Nosotros (inclusivo)',
 'Nuqanchis runasimita rimasun — todos hablaremos quechua'),

-- Bloque 6: Familia
('a1000025-0000-0000-0000-000000000025',
 'Día 25 – Mi mamá',
 'La palabra para madre en quechua.',
 25, 25, 'Familia',
 'Mamay',
 'Mi mamá',
 'Mamay allin — mi mamá es buena'),

('a1000026-0000-0000-0000-000000000026',
 'Día 26 – Mi papá',
 'La palabra para padre en quechua.',
 26, 26, 'Familia',
 'Taytay',
 'Mi papá',
 'Taytay hatun llank''aq — mi papá trabaja duro'),

('a1000027-0000-0000-0000-000000000027',
 'Día 27 – Mi hermano',
 'Hermano (dicho por hombre).',
 27, 27, 'Familia',
 'Wawqey',
 'Mi hermano',
 'Wawqey ñoqawan purin — mi hermano camina conmigo'),

('a1000028-0000-0000-0000-000000000028',
 'Día 28 – Mi hermana',
 'Hermana (dicha por hombre).',
 28, 28, 'Familia',
 'Panay',
 'Mi hermana',
 'Panay munakuqmi — mi hermana es cariñosa'),

('a1000029-0000-0000-0000-000000000029',
 'Día 29 – Mi casa',
 'La palabra para casa en quechua.',
 29, 29, 'Hogar',
 'Wasiy',
 'Mi casa',
 'Wasiy hatun — mi casa es grande'),

('a1000030-0000-0000-0000-000000000030',
 'Día 30 – Repaso semanas 1-4',
 'Repasa saludos, números y familia.',
 30, 30, 'Repaso',
 'Allillanmi, sulpayki',
 'Estoy bien, gracias',
 'Huk p''unchay huk yachay — un día, un aprendizaje'),

-- ============================================================
-- LECCIONES DÍAS 31–60
-- ============================================================

-- Bloque 7: Verbos básicos
('a1000031-0000-0000-0000-000000000031',
 'Día 31 – Comer',
 'El verbo comer en quechua.',
 31, 31, 'Verbos',
 'Mikhuni',
 'Como (yo como)',
 'Mikhuni tanta — como pan'),

('a1000032-0000-0000-0000-000000000032',
 'Día 32 – Beber',
 'El verbo beber en quechua.',
 32, 32, 'Verbos',
 'Uqyani',
 'Bebo (yo bebo)',
 'Uqyani yakuta — bebo agua'),

('a1000033-0000-0000-0000-000000000033',
 'Día 33 – Dormir',
 'El verbo dormir en quechua.',
 33, 33, 'Verbos',
 'Puñuni',
 'Duermo (yo duermo)',
 'Puñuni ch''isiyaykuqtin — duermo cuando anochece'),

('a1000034-0000-0000-0000-000000000034',
 'Día 34 – Ir',
 'El verbo ir en quechua.',
 34, 34, 'Verbos',
 'Rini',
 'Voy (yo voy)',
 'Rini qhatu — voy al mercado'),

('a1000035-0000-0000-0000-000000000035',
 'Día 35 – Venir',
 'El verbo venir en quechua.',
 35, 35, 'Verbos',
 'Hamuni',
 'Vengo (yo vengo)',
 'Hamuni wasiman — vengo a casa'),

('a1000036-0000-0000-0000-000000000036',
 'Día 36 – Hablar',
 'El verbo hablar en quechua.',
 36, 36, 'Verbos',
 'Rimani',
 'Hablo (yo hablo)',
 'Rimani runasimita — hablo quechua'),

('a1000037-0000-0000-0000-000000000037',
 'Día 37 – Ver',
 'El verbo ver en quechua.',
 37, 37, 'Verbos',
 'Qawani',
 'Veo (yo veo)',
 'Qawani intita — veo el sol'),

('a1000038-0000-0000-0000-000000000038',
 'Día 38 – Aprender',
 'El verbo aprender en quechua.',
 38, 38, 'Verbos',
 'Yachakuni',
 'Aprendo (yo aprendo)',
 'Yachakuni sapa p''unchay — aprendo cada día'),

-- Bloque 8: Alimentos y bebidas
('a1000039-0000-0000-0000-000000000039',
 'Día 39 – Pan',
 'El alimento básico: pan.',
 39, 39, 'Comida',
 'Tanta',
 'Pan',
 'Tanta allin mikhuna — el pan es buen alimento'),

('a1000040-0000-0000-0000-000000000040',
 'Día 40 – Agua',
 'El elemento esencial: agua.',
 40, 40, 'Comida',
 'Yaku',
 'Agua',
 'Yaku kawsay — el agua es vida'),

('a1000041-0000-0000-0000-000000000041',
 'Día 41 – Maíz',
 'El maíz sagrado de los Andes.',
 41, 41, 'Comida',
 'Sara',
 'Maíz',
 'Sara — el regalo de la Pachamama'),

('a1000042-0000-0000-0000-000000000042',
 'Día 42 – Papa',
 'La papa, origen andino.',
 42, 42, 'Comida',
 'Papa',
 'Papa',
 'Papa — nacida en los Andes para el mundo'),

-- Bloque 9: Naturaleza
('a1000043-0000-0000-0000-000000000043',
 'Día 43 – Sol',
 'El sol en quechua.',
 43, 43, 'Naturaleza',
 'Inti',
 'Sol',
 'Inti taytay — el padre sol'),

('a1000044-0000-0000-0000-000000000044',
 'Día 44 – Luna',
 'La luna en quechua.',
 44, 44, 'Naturaleza',
 'Killa',
 'Luna',
 'Killa mamacha — la madre luna'),

('a1000045-0000-0000-0000-000000000045',
 'Día 45 – Tierra',
 'La Pachamama en quechua.',
 45, 45, 'Naturaleza',
 'Pacha',
 'Tierra / tiempo / mundo',
 'Pachamama — madre tierra que todo da'),

('a1000046-0000-0000-0000-000000000046',
 'Día 46 – Río',
 'El río en quechua.',
 46, 46, 'Naturaleza',
 'Mayu',
 'Río',
 'Mayu purin — el río camina'),

('a1000047-0000-0000-0000-000000000047',
 'Día 47 – Montaña',
 'La montaña o cerro en quechua.',
 47, 47, 'Naturaleza',
 'Urqu',
 'Cerro / montaña',
 'Urqu hatun — la montaña es grande'),

-- Bloque 10: Animales
('a1000048-0000-0000-0000-000000000048',
 'Día 48 – Llama',
 'El animal andino por excelencia.',
 48, 48, 'Animales',
 'Llama',
 'Llama',
 'Llama allin llank''aq — la llama trabaja bien'),

('a1000049-0000-0000-0000-000000000049',
 'Día 49 – Cóndor',
 'El cóndor, rey de los cielos andinos.',
 49, 49, 'Animales',
 'Kuntur',
 'Cóndor',
 'Kuntur hawapi phawan — el cóndor vuela en las alturas'),

('a1000050-0000-0000-0000-000000000050',
 'Día 50 – Repaso verbos y naturaleza',
 'Repasa los verbos y vocabulario natural.',
 50, 50, 'Repaso',
 'Qawani intita, uqyani yakuta',
 'Veo el sol, bebo agua',
 'Naturaleza y acción — el quechua vive en el mundo'),

-- Bloque 11: Cuerpo humano
('a1000051-0000-0000-0000-000000000051',
 'Día 51 – Cabeza',
 'La cabeza en quechua.',
 51, 51, 'Cuerpo',
 'Uma',
 'Cabeza',
 'Uma alli kachun — que la cabeza esté bien'),

('a1000052-0000-0000-0000-000000000052',
 'Día 52 – Boca',
 'La boca en quechua.',
 52, 52, 'Cuerpo',
 'Simi',
 'Boca',
 'Simi rimasqan — lo que dice la boca'),

('a1000053-0000-0000-0000-000000000053',
 'Día 53 – Ojo',
 'El ojo en quechua.',
 53, 53, 'Cuerpo',
 'Ñawi',
 'Ojo',
 'Ñawi qawasqan — lo que el ojo ve'),

('a1000054-0000-0000-0000-000000000054',
 'Día 54 – Oreja',
 'La oreja en quechua.',
 54, 54, 'Cuerpo',
 'Rinri',
 'Oreja',
 'Rinri uyarisqan — lo que la oreja escucha'),

('a1000055-0000-0000-0000-000000000055',
 'Día 55 – Mano',
 'La mano en quechua.',
 55, 55, 'Cuerpo',
 'Makiy',
 'Mi mano',
 'Makiy llank''aq — mi mano que trabaja'),

('a1000056-0000-0000-0000-000000000056',
 'Día 56 – Pie',
 'El pie en quechua.',
 56, 56, 'Cuerpo',
 'Chakiy',
 'Mi pie',
 'Chakiy purisqan — mi pie que camina'),

-- Bloque 12: Emociones y cierre
('a1000057-0000-0000-0000-000000000057',
 'Día 57 – Alegría',
 'Expresar alegría en quechua.',
 57, 57, 'Emociones',
 'Kusikuni',
 'Estoy alegre',
 'Kusikuni sapa p''unchay — me alegro cada día'),

('a1000058-0000-0000-0000-000000000058',
 'Día 58 – Tristeza',
 'Expresar tristeza en quechua.',
 58, 58, 'Emociones',
 'Llakikuni',
 'Estoy triste',
 'Llakikuni ichaqa suyakuni — estoy triste pero espero'),

('a1000059-0000-0000-0000-000000000059',
 'Día 59 – Querer / Amar',
 'El verbo amar en quechua.',
 59, 59, 'Emociones',
 'Munakuni',
 'Quiero / Amo',
 'Munakuni Pachamama — amo a la madre tierra'),

('a1000060-0000-0000-0000-000000000060',
 'Día 60 – Repaso final Plan A1',
 'Cierre del Plan A1: todo lo aprendido en un solo ejercicio.',
 60, 60, 'Repaso',
 'Runasimita yachakuni',
 'Aprendo quechua',
 'Runasimita yachakuni — aprender quechua es honrar a tus ancestros');


-- ============================================================
-- EJERCICIOS TIPO CHOICE — DÍAS 1–30
-- ============================================================
INSERT INTO public.exercises (lesson_id, type, "order", content) VALUES

('a1000001-0000-0000-0000-000000000001', 'choice', 1,
 '{"question": "¿Qué significa ''Napaykullayki''?", "options": ["Hola", "Adiós", "Gracias"], "correct_index": 0}'::jsonb),

('a1000002-0000-0000-0000-000000000002', 'choice', 1,
 '{"question": "¿Cómo se dice ''¿Estás bien?'' en quechua?", "options": ["Allillanchu?", "Sulpayki", "Paqarinkamacha"], "correct_index": 0}'::jsonb),

('a1000003-0000-0000-0000-000000000003', 'choice', 1,
 '{"question": "¿Qué significa ''Allillanmi''?", "options": ["Estoy bien", "Estoy mal", "No sé"], "correct_index": 0}'::jsonb),

('a1000004-0000-0000-0000-000000000004', 'choice', 1,
 '{"question": "¿Qué significa ''Ima sutiykim''?", "options": ["¿Cómo te llamas?", "¿De dónde eres?", "¿Cuántos años tienes?"], "correct_index": 0}'::jsonb),

('a1000005-0000-0000-0000-000000000005', 'choice', 1,
 '{"question": "¿Qué significa ''Sutiy'' en ''Sutiyqa Mariami''?", "options": ["Mi nombre", "Mi casa", "Mi familia"], "correct_index": 0}'::jsonb),

('a1000006-0000-0000-0000-000000000006', 'choice', 1,
 '{"question": "¿Cómo se pregunta ''¿De dónde eres?'' en quechua?", "options": ["Maymantam kanki?", "Ima sutiykim?", "Allillanchu?"], "correct_index": 0}'::jsonb),

('a1000007-0000-0000-0000-000000000007', 'choice', 1,
 '{"question": "¿Cómo se dice ''Soy de Cusco'' en quechua?", "options": ["Qusqumanta kani", "Qusqopi kani", "Qusquta rini"], "correct_index": 0}'::jsonb),

('a1000008-0000-0000-0000-000000000008', 'choice', 1,
 '{"question": "¿Qué significa ''Tinkunanchiskama''?", "options": ["Hasta que nos veamos", "Buenas noches", "Hasta mañana"], "correct_index": 0}'::jsonb),

('a1000009-0000-0000-0000-000000000009', 'choice', 1,
 '{"question": "¿Cómo se dice ''Hasta mañana'' en quechua?", "options": ["Paqarinkamacha", "Tinkunanchiskama", "Allillanmi"], "correct_index": 0}'::jsonb),

('a1000010-0000-0000-0000-000000000010', 'choice', 1,
 '{"question": "¿Qué significa ''Sulpayki''?", "options": ["Gracias", "Por favor", "Perdón"], "correct_index": 0}'::jsonb),

('a1000011-0000-0000-0000-000000000011', 'choice', 1,
 '{"question": "¿Cómo se dice ''dos'' en quechua?", "options": ["Iskay", "Huk", "Kimsa"], "correct_index": 0}'::jsonb),

('a1000012-0000-0000-0000-000000000012', 'choice', 1,
 '{"question": "¿Qué número es ''Pichqa''?", "options": ["Cinco", "Cuatro", "Seis"], "correct_index": 0}'::jsonb),

('a1000013-0000-0000-0000-000000000013', 'choice', 1,
 '{"question": "¿Cómo se dice ''ocho'' en quechua?", "options": ["Pusaq", "Qanchis", "Isqun"], "correct_index": 0}'::jsonb),

('a1000014-0000-0000-0000-000000000014', 'choice', 1,
 '{"question": "¿Qué significa ''Chunka''?", "options": ["Diez", "Cien", "Mil"], "correct_index": 0}'::jsonb),

('a1000015-0000-0000-0000-000000000015', 'choice', 1,
 '{"question": "¿Cómo se dice ''rojo'' en quechua?", "options": ["Puka", "Qomer", "Yana"], "correct_index": 0}'::jsonb),

('a1000016-0000-0000-0000-000000000016', 'choice', 1,
 '{"question": "¿Qué significa ''Anqas''?", "options": ["Azul", "Verde", "Amarillo"], "correct_index": 0}'::jsonb),

('a1000017-0000-0000-0000-000000000017', 'choice', 1,
 '{"question": "¿Cómo se dice ''blanco'' en quechua?", "options": ["Yuraq", "Yana", "Oqe"], "correct_index": 0}'::jsonb),

('a1000018-0000-0000-0000-000000000018', 'choice', 1,
 '{"question": "¿Qué significa ''Puñuni tutamanta''?", "options": ["Duermo en la noche", "Como en la mañana", "Camino de tarde"], "correct_index": 0}'::jsonb),

('a1000019-0000-0000-0000-000000000019', 'choice', 1,
 '{"question": "¿Qué parte del día es ''Tutamanta''?", "options": ["Mañana", "Tarde", "Noche"], "correct_index": 0}'::jsonb),

('a1000020-0000-0000-0000-000000000020', 'choice', 1,
 '{"question": "¿Cómo se dice ''noche'' en quechua?", "options": ["Tuta", "Chisintin", "Tutamanta"], "correct_index": 0}'::jsonb),

('a1000021-0000-0000-0000-000000000021', 'choice', 1,
 '{"question": "¿Qué significa ''Nuqa''?", "options": ["Yo", "Tú", "Él"], "correct_index": 0}'::jsonb),

('a1000022-0000-0000-0000-000000000022', 'choice', 1,
 '{"question": "¿Cómo se dice ''tú'' en quechua?", "options": ["Qam", "Nuqa", "Pay"], "correct_index": 0}'::jsonb),

('a1000023-0000-0000-0000-000000000023', 'choice', 1,
 '{"question": "¿Qué significa ''Pay''?", "options": ["Él / Ella", "Yo", "Nosotros"], "correct_index": 0}'::jsonb),

('a1000024-0000-0000-0000-000000000024', 'choice', 1,
 '{"question": "¿Qué significa ''Nuqanchis''?", "options": ["Nosotros (todos)", "Nosotros (sin ti)", "Ustedes"], "correct_index": 0}'::jsonb),

('a1000025-0000-0000-0000-000000000025', 'choice', 1,
 '{"question": "¿Cómo se dice ''mi mamá'' en quechua?", "options": ["Mamay", "Taytay", "Panay"], "correct_index": 0}'::jsonb),

('a1000026-0000-0000-0000-000000000026', 'choice', 1,
 '{"question": "¿Qué significa ''Taytay''?", "options": ["Mi papá", "Mi abuelo", "Mi hermano"], "correct_index": 0}'::jsonb),

('a1000027-0000-0000-0000-000000000027', 'choice', 1,
 '{"question": "¿Qué significa ''Wawqey''?", "options": ["Mi hermano", "Mi hermana", "Mi hijo"], "correct_index": 0}'::jsonb),

('a1000028-0000-0000-0000-000000000028', 'choice', 1,
 '{"question": "¿Cómo dice un hombre ''mi hermana'' en quechua?", "options": ["Panay", "Wawqey", "Churiy"], "correct_index": 0}'::jsonb),

('a1000029-0000-0000-0000-000000000029', 'choice', 1,
 '{"question": "¿Qué significa ''Wasiy''?", "options": ["Mi casa", "Mi cama", "Mi puerta"], "correct_index": 0}'::jsonb),

('a1000030-0000-0000-0000-000000000030', 'choice', 1,
 '{"question": "¿Cómo se dice ''estoy bien, gracias'' en quechua?", "options": ["Allillanmi, sulpayki", "Allillanchu, sulpayki", "Napaykullayki, sulpayki"], "correct_index": 0}'::jsonb),


-- ============================================================
-- EJERCICIOS TIPO CHOICE — DÍAS 31–60
-- ============================================================

('a1000031-0000-0000-0000-000000000031', 'choice', 1,
 '{"question": "¿Qué significa ''Mikhuni''?", "options": ["Como", "Bebo", "Duermo"], "correct_index": 0}'::jsonb),

('a1000032-0000-0000-0000-000000000032', 'choice', 1,
 '{"question": "¿Cómo se dice ''bebo'' en quechua?", "options": ["Uqyani", "Mikhuni", "Puñuni"], "correct_index": 0}'::jsonb),

('a1000033-0000-0000-0000-000000000033', 'choice', 1,
 '{"question": "¿Qué significa ''Puñuni''?", "options": ["Duermo", "Como", "Camino"], "correct_index": 0}'::jsonb),

('a1000034-0000-0000-0000-000000000034', 'choice', 1,
 '{"question": "¿Cómo se dice ''voy'' en quechua?", "options": ["Rini", "Hamuni", "Rimani"], "correct_index": 0}'::jsonb),

('a1000035-0000-0000-0000-000000000035', 'choice', 1,
 '{"question": "¿Qué significa ''Hamuni''?", "options": ["Vengo", "Voy", "Camino"], "correct_index": 0}'::jsonb),

('a1000036-0000-0000-0000-000000000036', 'choice', 1,
 '{"question": "¿Cómo se dice ''hablo'' en quechua?", "options": ["Rimani", "Yachakuni", "Qawani"], "correct_index": 0}'::jsonb),

('a1000037-0000-0000-0000-000000000037', 'choice', 1,
 '{"question": "¿Qué significa ''Qawani''?", "options": ["Veo", "Escucho", "Camino"], "correct_index": 0}'::jsonb),

('a1000038-0000-0000-0000-000000000038', 'choice', 1,
 '{"question": "¿Cómo se dice ''aprendo'' en quechua?", "options": ["Yachakuni", "Rimani", "Rini"], "correct_index": 0}'::jsonb),

('a1000039-0000-0000-0000-000000000039', 'choice', 1,
 '{"question": "¿Qué significa ''Tanta''?", "options": ["Pan", "Maíz", "Papa"], "correct_index": 0}'::jsonb),

('a1000040-0000-0000-0000-000000000040', 'choice', 1,
 '{"question": "¿Cómo se dice ''agua'' en quechua?", "options": ["Yaku", "Api", "Sara"], "correct_index": 0}'::jsonb),

('a1000041-0000-0000-0000-000000000041', 'choice', 1,
 '{"question": "¿Qué significa ''Sara''?", "options": ["Maíz", "Papa", "Pan"], "correct_index": 0}'::jsonb),

('a1000042-0000-0000-0000-000000000042', 'choice', 1,
 '{"question": "¿Cómo se dice ''papa'' (tubérculo) en quechua?", "options": ["Papa", "Tanta", "Sara"], "correct_index": 0}'::jsonb),

('a1000043-0000-0000-0000-000000000043', 'choice', 1,
 '{"question": "¿Qué significa ''Inti''?", "options": ["Sol", "Luna", "Estrella"], "correct_index": 0}'::jsonb),

('a1000044-0000-0000-0000-000000000044', 'choice', 1,
 '{"question": "¿Cómo se dice ''luna'' en quechua?", "options": ["Killa", "Inti", "Quyllur"], "correct_index": 0}'::jsonb),

('a1000045-0000-0000-0000-000000000045', 'choice', 1,
 '{"question": "¿Qué significa ''Pacha''?", "options": ["Tierra / mundo / tiempo", "Agua", "Fuego"], "correct_index": 0}'::jsonb),

('a1000046-0000-0000-0000-000000000046', 'choice', 1,
 '{"question": "¿Cómo se dice ''río'' en quechua?", "options": ["Mayu", "Urqu", "Pacha"], "correct_index": 0}'::jsonb),

('a1000047-0000-0000-0000-000000000047', 'choice', 1,
 '{"question": "¿Qué significa ''Urqu''?", "options": ["Cerro / montaña", "Río", "Valle"], "correct_index": 0}'::jsonb),

('a1000048-0000-0000-0000-000000000048', 'choice', 1,
 '{"question": "¿Cómo se dice ''llama'' (animal) en quechua?", "options": ["Llama", "Kuntur", "Atuq"], "correct_index": 0}'::jsonb),

('a1000049-0000-0000-0000-000000000049', 'choice', 1,
 '{"question": "¿Qué significa ''Kuntur''?", "options": ["Cóndor", "Llama", "Puma"], "correct_index": 0}'::jsonb),

('a1000050-0000-0000-0000-000000000050', 'choice', 1,
 '{"question": "¿Qué significa ''Qawani intita, uqyani yakuta''?", "options": ["Veo el sol, bebo agua", "Veo el agua, bebo el sol", "Como el sol, duermo agua"], "correct_index": 0}'::jsonb),

('a1000051-0000-0000-0000-000000000051', 'choice', 1,
 '{"question": "¿Qué significa ''Uma''?", "options": ["Cabeza", "Mano", "Pie"], "correct_index": 0}'::jsonb),

('a1000052-0000-0000-0000-000000000052', 'choice', 1,
 '{"question": "¿Cómo se dice ''boca'' en quechua?", "options": ["Simi", "Ñawi", "Rinri"], "correct_index": 0}'::jsonb),

('a1000053-0000-0000-0000-000000000053', 'choice', 1,
 '{"question": "¿Qué significa ''Ñawi''?", "options": ["Ojo", "Oreja", "Nariz"], "correct_index": 0}'::jsonb),

('a1000054-0000-0000-0000-000000000054', 'choice', 1,
 '{"question": "¿Cómo se dice ''oreja'' en quechua?", "options": ["Rinri", "Simi", "Uma"], "correct_index": 0}'::jsonb),

('a1000055-0000-0000-0000-000000000055', 'choice', 1,
 '{"question": "¿Qué significa ''Makiy''?", "options": ["Mi mano", "Mi pie", "Mi brazo"], "correct_index": 0}'::jsonb),

('a1000056-0000-0000-0000-000000000056', 'choice', 1,
 '{"question": "¿Cómo se dice ''mi pie'' en quechua?", "options": ["Chakiy", "Makiy", "Uma"], "correct_index": 0}'::jsonb),

('a1000057-0000-0000-0000-000000000057', 'choice', 1,
 '{"question": "¿Qué significa ''Kusikuni''?", "options": ["Estoy alegre", "Estoy triste", "Estoy cansado"], "correct_index": 0}'::jsonb),

('a1000058-0000-0000-0000-000000000058', 'choice', 1,
 '{"question": "¿Cómo se dice ''estoy triste'' en quechua?", "options": ["Llakikuni", "Kusikuni", "Manchakuni"], "correct_index": 0}'::jsonb),

('a1000059-0000-0000-0000-000000000059', 'choice', 1,
 '{"question": "¿Qué significa ''Munakuni''?", "options": ["Quiero / Amo", "Odio", "Temo"], "correct_index": 0}'::jsonb),

('a1000060-0000-0000-0000-000000000060', 'choice', 1,
 '{"question": "¿Qué significa ''Runasimita yachakuni''?", "options": ["Aprendo quechua", "Hablo quechua", "Enseño quechua"], "correct_index": 0}'::jsonb);

COMMIT;
