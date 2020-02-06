<?php

    $date = $_POST['sighting_date'] ;
    $type = htmlspecialchars($_POST['creature_type']);
    $distance = htmlspecialchars($_POST['creature_distance']);
    $weight = htmlspecialchars($_POST['creature_weight']);
    $height = htmlspecialchars($_POST['creature_height']);
    $color = htmlspecialchars($_POST['creature_color_rgb']);
    $lat = htmlspecialchars($_POST['sighting_latitude']);
    $long = htmlspecialchars($_POST['sighting_longitude']);

    $my_date = date('Y-m-d', strtotime($date));

    if($type == ''){
        $type = "Other";
    }

    $query = "INSERT INTO sightings (sighting_date, creature_type, creature_distance, creature_weight, creature_height, creature_color, sighting_latitude, sighting_longitude) ";
    $query .= "VALUES ('$my_date', '$type', '$distance', '$weight', '$height', '$color', '$lat', '$long') ";

    $result = db_connection($query);

    if ($result) {
        $msg = "Creature added successfully" ;
        success($msg);
    } else {
        fail('Insert failed.');
    }
    exit; 


    function db_connection($query){
        
        $conn = mysqli_connect('localhost','loveminpic','alswl672!', 'loveminpic');
        
        return mysqli_query($conn, $query);
    }  

    function fail($message){
        die(json_encode(array('status' => 'fail', 'message' => $message)));
    }

    function success($message){
        die(json_encode(array('status' => 'success', 'message' => $message)));
    }
?>