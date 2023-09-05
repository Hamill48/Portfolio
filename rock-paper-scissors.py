from random import randint

computer_move = ''
computer_choose = ''
player_choose = ''
key = ''
score = {
    'wins': 0,
    'losses': 0,
    'draws': 0
}

while key != 'exit':
    key = input('>').lower()
    computer_move = randint(0, 9)

    if key == 'rock' or key == 'paper' or key == 'scissors':
        if computer_move <= 3:
            computer_choose = 'rock'
            print(f'Computer chose: {computer_choose}')
        elif computer_move > 3 and computer_move <= 6:
            computer_choose = 'paper'
            print(f'Computer chose: {computer_choose}')
        else:
            computer_choose = 'scissors'
            print(f'Computer chose: {computer_choose}')

        if key == 'rock':
            player_choose = 'rock'
        elif key == 'paper':
            player_choose = 'paper'
        elif key == 'scissors':
            player_choose = 'scissors'

        print(f'You chose: {player_choose}')

        if computer_choose == player_choose:
            print("\033[31mIt's a draw!\033[0m")
            score['draws'] += 1
        elif computer_choose == 'rock' and player_choose == 'paper':
            print("\033[31mYou win!\033[0m")
            score['wins'] += 1
        elif computer_choose == 'rock' and player_choose == 'scissors':
            print("\033[31mYou loose!\033[0m")
            score['losses'] += 1
        elif computer_choose == 'paper' and player_choose == 'rock':
            print("\033[31mYou loose!\033[0m")
            score['losses'] += 1
        elif computer_choose == 'paper' and player_choose == 'scissors':
            print("\033[31mYou win!\033[0m")
            score['wins'] += 1
        elif computer_choose == 'scissors' and player_choose == 'rock':
            print("\033[31mYou win!\033[0m")
            score['wins'] += 1
        elif computer_choose == 'scissors' and player_choose == 'paper':
            print("\033[31mYou loose!\033[0m")
            score['losses'] += 1
        print(f'Wins: {score["wins"]}, Losses: {score["losses"]}, Draws: {score["draws"]}')

    elif key == 'reset':
       score = {
        'wins': 0,
        'losses': 0,
        'draws': 0
        }
       print('You reseted your scores!')

    elif key == 'exit':
        print("\033[31mYou exited from the game!\033[0m")
        break
    
    elif key == 'help':
        print('''
rock - to choose rock
paper - to choose paper
scissors - to choose scissors
reset - to reset scores
exit - to exit the game
''')
        
    else:
        print("\033[31mThis command does not exist! Please choose another or type 'help'\033[0m")
