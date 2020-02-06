<?php
    mysqli_connect('localhost', 'loveminpic', '940828')
                OR die(fail('Could not connect to database.'));
    mysqli_select_db('loveminpic');
    echo "Connected!";
?>