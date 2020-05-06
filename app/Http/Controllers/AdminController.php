<?php

namespace App\Http\Controllers;

use App\rts;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    //

    public static function getAllRTSandRCU()
    {
        return DB::table('rts')
            ->join('rcu', 'rcu.rts_id', '=', 'rts.id')
            ->select('rts.name as name', 'rts.coord_x', 'rts.coord_y', 'rcu.name as rcu')
            ->get();
    }

    public function index()
    {
        return view('admin.index', [
            'title' => "GMMS | Администратор",
            'content' => "Hello admin",
            'list' => self::getAllRTSandRCU()
        ]);

        /*
SELECT rts.name as rts, rts.coord_x, rts.coord_y, rcu.name as rcu, rcu.host FROM rts JOIN rcu ON rcu.rts_id = rts.id ORDER BY rcu.host LIMIT 50
*/

//        $getRTS = RTS::all()->toArray();
//
//        return view('admin.index', [
//            'title' => "GMMS | Администратор",
//            'content' => "Hello admin",
//            'rtsList' => $getRTS
//        ]);
    }
}
