const questions = [
    'O que aprendi hoje?',
    'O que me deixou aborrecido?, E o que eu poderia fazer para melhorar?',
    'O que me deixou feliz hoje?',
    'Quantas pessoas eu ajudei hoje?'
]
const ask = (index = 0) => {
    return process.stdout.write(questions[index] + '\n\n')
}

ask();