<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CursoController extends Controller
{
    public function getCursosDH(){
        $url= 'http://digitalhouse.com/api/getCursos';
        $cursosJson = file_get_contents($url);
        $arrayCursos = json_decode($cursosJson, true);
        //dd($arrayCursos['data']);
    

        foreach ($arrayCursos['data'] as $arrayCurso){
            echo '<h3>'.$arrayCurso['curso'].'</a></h3>
            <p><strong>Descripción: </strong>'.$arrayCurso['descripcion'].'</p>
            <a href="">Ver comisiones</a><br><br>';
        }
    }

    public function getComisionesDH($curso_id){
        $url= 'http://digitalhouse.com/api/getComisiones';
        $comisionesJson = file_get_contents($url);
        $arrayComisiones = json_decode($comisionesJson, true);
        //dd($arrayComisiones['data']);

        foreach ($arrayComisiones['data'] as $comision){
            if($comision['curso_id'] == $curso_id){
                echo $comision['sede'] . $comision['horarios'];
            }
        }
    }


}
