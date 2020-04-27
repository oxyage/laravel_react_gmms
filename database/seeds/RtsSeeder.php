<?php

use App\rts;
use Illuminate\Database\Seeder;

class rtsSeeder extends Seeder
{

    protected $RTS = [
        ['name' => 'Александровский', 'coord_x' => '74', 'coord_y' => '3'],
        ['name' => 'Алешня', 'coord_x' => '53', 'coord_y' => '80'],
        ['name' => 'Байкова', 'coord_x' => '89', 'coord_y' => '55'],
        ['name' => 'Белая Березка', 'coord_x' => '55', 'coord_y' => '24'],
        ['name' => 'Брянск', 'coord_x' => '74', 'coord_y' => '62'],
        ['name' => 'Веребск', 'coord_x' => '87', 'coord_y' => '36'],
        ['name' => 'Вормино', 'coord_x' => '42', 'coord_y' => '58'],
        ['name' => 'Гордеевка', 'coord_x' => '18', 'coord_y' => '49'],
        ['name' => 'Деснянский', 'coord_x' => '65', 'coord_y' => '46'],
        ['name' => 'Дятьково', 'coord_x' => '75', 'coord_y' => '78'],
        ['name' => 'Жирятино', 'coord_x' => '60', 'coord_y' => '61'],
        ['name' => 'Жуковка', 'coord_x' => '61', 'coord_y' => '74'],
        ['name' => 'Кистер', 'coord_x' => '44', 'coord_y' => '25'],
        ['name' => 'Клетня', 'coord_x' => '47', 'coord_y' => '67'],
        ['name' => 'Климово', 'coord_x' => '22', 'coord_y' => '23'],
        ['name' => 'Кокоревка', 'coord_x' => '73', 'coord_y' => '33'],
        ['name' => 'Красная Гора', 'coord_x' => '7', 'coord_y' => '51'],
        ['name' => 'Красное', 'coord_x' => '64', 'coord_y' => '54'],
        ['name' => 'Навля', 'coord_x' => '79', 'coord_y' => '44'],
        ['name' => 'Новозыбков', 'coord_x' => '18', 'coord_y' => '30'],
        ['name' => 'Ольховка', 'coord_x' => '21', 'coord_y' => '40'],
        ['name' => 'Погар', 'coord_x' => '48', 'coord_y' => '31'],
        ['name' => 'Почеп', 'coord_x' => '53', 'coord_y' => '49'],
        ['name' => 'Речица', 'coord_x' => '65', 'coord_y' => '67'],
        ['name' => 'Сельцо', 'coord_x' => '68', 'coord_y' => '84'],
        ['name' => 'Семячки', 'coord_x' => '58', 'coord_y' => '35'],
        ['name' => 'Снопоть', 'coord_x' => '58', 'coord_y' => '92'],
        ['name' => 'Стародуб', 'coord_x' => '36', 'coord_y' => '32'],
        ['name' => 'Унеча', 'coord_x' => '34', 'coord_y' => '43'],
        ['name' => 'Чуровичи', 'coord_x' => '18', 'coord_y' => '14'],
        ['name' => 'Шведчики', 'coord_x' => '80', 'coord_y' => '15'],

    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->RTS as $rts)
        {
            rts::create([
                'name' => $rts['name'],
                'coord_x' => $rts['coord_x'],
                'coord_y' => $rts['coord_y']
            ]);
        }
    }
}
